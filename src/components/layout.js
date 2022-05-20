import React, {useContext} from "react";
import Header from "./header";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import {UserContext} from '../contexts/userContext';
import ErrorPage from "./error.js";

const Layout = ({children, title}) => {
  const userContext = useContext(UserContext);
  const {isAuthenticated, user} = userContext.state;

    return (
        isAuthenticated ? (<React.Fragment>
            <Header/>
            <h3>{title}</h3>
            <Container>
              {user.type==="employee" && <Row>
              <Nav variant="pills" defaultActiveKey="/profile">
                <Nav.Item>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/jobs">jobs</Nav.Link>
                </Nav.Item>
            </Nav>
            </Row>}
            {user.type==="employer" &&<Row>
              <Nav variant="pills" defaultActiveKey="/jobs">
                <Nav.Item>
                  <Nav.Link href="/jobs" >Jobs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/create-job" >Add new job</Nav.Link>
                </Nav.Item>
            </Nav>
            </Row>}
            </Container>
            {children}
        </React.Fragment>) : <ErrorPage />
    )
};

export default Layout;