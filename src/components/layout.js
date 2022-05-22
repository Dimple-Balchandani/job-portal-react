import React, {useContext} from "react";
import Header from "./header";
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {UserContext} from '../contexts/userContext';
import ErrorPage from "./error.js";
import { useNavigate } from "react-router-dom";
import _ from "underscore";

const Layout = ({children, title}) => {

  const userContext = useContext(UserContext);
  const {isAuthenticated, user} = userContext.state;

  const nav_items = user.type === "employer" ? [{title: "Jobs", url:"/jobs"},{title:"Create Job", url:"/create-job"}] : [{title: "Profile", url:"/profile"},{title:"Jobs", url:"/jobs"}];

  const onNavChange = (e) => {
    let selectedNav = _.findWhere(nav_items, {title: e})
    navigate(selectedNav.url, { replace: true });
  }

  let navigate = useNavigate();

    return (
        isAuthenticated ? (<React.Fragment>
            <Header/>
            <h3>{title}</h3>
            <Row>
                <Col sm={3}>
                <Nav defaultActiveKey={nav_items[0].title} className="flex-column" activeKey={title} onSelect={(e) => onNavChange(e)}>
                  {nav_items.map((obj) =><Nav.Link eventKey={obj.title} key={obj.title}>{obj.title}</Nav.Link>)}
                </Nav>
                </Col>
                <Col sm={9}>
                  {children}
                </Col>
              </Row>
        </React.Fragment>) : <ErrorPage />
    )
};

export default Layout;