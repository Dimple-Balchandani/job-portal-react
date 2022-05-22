import React, {useContext } from "react";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {UserContext} from '../contexts/userContext';

export default function Header() {

  const userContext = useContext(UserContext);
  const {user} = userContext.state;

  let navigate = useNavigate();
  
  const handleLogout = () => {
    userContext.authDispatch({
        type: 'LOGOUT',
        payload: {},
    });
    localStorage.removeItem('user');
    navigate("/login", { replace: true });
  }

  const onHomeClick = () => {
    if(user.type === "employee") {
      navigate("/profile", { replace: true });
    } else {
      navigate("/jobs", { replace: true });
    }
  }
  

  return (<Container>
      <Row>
        <Col sm={8}><h1 onClick={onHomeClick}>Job Portal</h1></Col>
        <Col sm={4}>
          {user.email}
        <Button onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
    </Container>);
  }