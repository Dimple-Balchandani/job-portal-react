import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Container from 'react-bootstrap/Container';
import { UserContext } from "../contexts/userContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("employee");
  const userContext = useContext(UserContext);

  let navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(validateForm()) {
      handleLogin()
    }
  }

  function userLogin(details) {
    return Promise.resolve({...details, type: userType, name: 'Dimple', experience: '6yrs', location: 'Bangalore', skills : 'react'});
  }

  const handleLogin = async () => {
    let userDetails = {email, password }
    const data = await userLogin(userDetails);
    userContext.authDispatch({
      type: 'LOGIN',
      payload: {
          user: data || {},
          token: Math.random().toString(36).substr(2),
      },
    });
    if(userType === 'employee') {
      navigate("/profile", { replace: true });
    } else {
      navigate("/jobs", { replace: true });
    }
  }

    return (
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Welcome To Job Portal</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <div>
        {/* <ToggleButtonGroup name="userType">
          <ToggleButton
            key={1}
            id={1}
            type="radio"
            name="radio"
            value={"employee"}
            checked={userType === "employee"}
            onChange={(e) => setUserType("employee")}
          >
            Employee
          </ToggleButton>
          <ToggleButton
            key={2}
            id={2}
            type="radio"
            name="radio"
            value={"employer"}
            checked={userType === "employer"}
            onChange={(e) => setUserType("employer")}
          >
            Employer
          </ToggleButton>
        </ToggleButtonGroup> */}
         <div className="mb-3">
          <Form.Check
            inline
            label="Employee"
            name="group1"
            type="radio"
            id="employee"
            value={"employee"}
            checked={userType === "employee"}
            onChange={(e) => setUserType("employee")}
          />
          <Form.Check
            inline
            label="Employer"
            name="group1"
            type="radio"
            id="employer"
            value={"employer"}
            checked={userType === "employer"}
            onChange={(e) => setUserType("employer")}
          />
          </div>
        </div>
        <div>
        <Button variant="primary" type="submit" className="submit" onClick={handleSubmit}>
          Submit
        </Button>
        </div>
      </Form>
      </Container>
    )
  }
