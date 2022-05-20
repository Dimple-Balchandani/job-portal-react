import React, {useContext } from "react";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {UserContext} from '../contexts/userContext';
import ErrorPage from "./error.js";
import Nav from 'react-bootstrap/Nav'

export default function Header(props) {

  const userContext = useContext(UserContext);
  const {isAuthenticated, user} = userContext.state;

  let navigate = useNavigate();
  
  const handleLogout = () => {
    userContext.authDispatch({
        type: 'LOGOUT',
        payload: {},
    });
    navigate("/login", { replace: true });
  }

  return (isAuthenticated ? <Container>
      <Row>
        <Col sm={8}><h1>Job Portal</h1></Col>
        <Col sm={4}>
          {user.email}
        <Button onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
      {props.type === 'employee' ? (<Row>
        <Nav variant="pills" defaultActiveKey="/profile">
          <Nav.Item>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/jobs">jobs</Nav.Link>
          </Nav.Item>
      </Nav>
      </Row>) : 
      (<Row>
        <Nav variant="pills" defaultActiveKey="/jobs">
          <Nav.Item>
            <Nav.Link href="/jobs">jobs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/create-job">Add new job</Nav.Link>
          </Nav.Item>
      </Nav>
      </Row>)}
    </Container> : <ErrorPage />
    );
  }