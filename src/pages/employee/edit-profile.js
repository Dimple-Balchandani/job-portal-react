import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../../components/layout'
import _ from "underscore";
import Container from 'react-bootstrap/Container';
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

const skills = ['Please select', 'webpack', 'javascript', 'react', 'angular', 'typescript', 'nodejs', 'html', 'css'];

const EditProfile = () => {
  const [userInfo, setInfo] = useState(JSON.parse(localStorage.getItem('user')));
  const [errorMessage, setErrorMessage] = useState({});
  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  function handleChange(e) {
    let info = {...userInfo};
    info[e.target.name] = e.target.value
    setInfo(info);
    if(e.target.name === 'email') {
      let exp = /\S+@\S+\.\S+/;
      if(!exp.test(e.target.value)) {
        setEmailInvalid(true);
      }
    }
  }

  function validateData() {
    for (const property in userInfo) {
      if(_.isEmpty(userInfo[property])) {
        errorMessage[property] = "Invalid "+ property;
      }
    }
    setErrorMessage(errorMessage);
    return _.isEmpty(errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(validateData()) {
      setInfo(userInfo);
      localStorage.setItem('user', JSON.stringify(userInfo));
    } else {
      return false;
    }
    //after sucessful PUT call, fetch updated data
    userContext.authDispatch({
      type: 'LOGIN',
      payload: {
          user: userInfo || {},
          token: Math.random().toString(36).substr(2),
      },
    });
    navigate("/profile", { replace: true });
  }

  return (
    <Layout title="Edit Profile">
      <Container className="p-5 mb-4 bg-light rounded-3">
      {userInfo && <Form>
      <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={userInfo['name']} name="name" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.name)}/>
          { !_.isEmpty(errorMessage.name) && <Form.Label className="error">{errorMessage.name}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={userInfo['email']} name="email" onChange={(e) => handleChange(e)} isInvalid={isEmailInvalid}/>
          {!_.isEmpty(errorMessage.email) && <Form.Label className="error">{errorMessage.email}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control type="text" placeholder="Enter experience" value={userInfo['experience']} name="experience" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.experience)}/>
          {!_.isEmpty(errorMessage.experience) && <Form.Label className="error">{errorMessage.experience}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" value={userInfo['location']} name="location" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.location)}/>
          {!_.isEmpty(errorMessage.location) && <Form.Label className="error">{errorMessage.location}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="url">
          <Form.Label>Github url</Form.Label>
          <Form.Control type="text" placeholder="Enter url" value={userInfo['url']} name="url" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.url)}/>
          {!_.isEmpty(errorMessage.url) && <Form.Label className="error">{errorMessage.url}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Skills Required</Form.Label>
          <Form.Select aria-label="Default select example" name="skills" value={userInfo['skills']} onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.skills)}>
            {skills.map((element) => <option key={element}>{element}</option>)}
          </Form.Select>
          {!_.isEmpty(errorMessage.skills) && <Form.Label className="error">{errorMessage.skills}</Form.Label>}
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>}
      </Container>
    </Layout>
  );
};

export default EditProfile;