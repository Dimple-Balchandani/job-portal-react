import React, {useContext } from "react";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {UserContext} from '../context/userContext';
import ErrorPage from "./error.js";

export default function Header() {

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
        <Col sm={8}>Job Portal</Col>
        <Col sm={4}>
          {user.email}
        <Button onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
    </Container> : <ErrorPage />
    );
  }