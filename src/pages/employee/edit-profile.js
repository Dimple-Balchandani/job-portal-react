import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../../components/layout'
import _ from "underscore";
import Container from 'react-bootstrap/Container';

const skills = ['Please select', 'webpack', 'javascript', 'react', 'angular', 'typescript', 'nodejs', 'html', 'css'];

const EditProfile = () => {
  const [userInfo, setInfo] = useState({
    "name": null,
    "email": null,
    "experience": null,
    "skills": null,
    "url": null,
    "location": null
  });
  const [errorMessage, setErrorMessage] = useState({});

  function handleChange(e) {
    userInfo[e.target.name] = e.target.value;
    setInfo(userInfo);
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
    }
  }

  return (
    <Layout title="Edit Profile">
      <Container className="p-5 mb-4 bg-light rounded-3">
      <Form>
      <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.name)}/>
          { !_.isEmpty(errorMessage.name) && <Form.Label className="error">{errorMessage.name}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" name="email" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.email)}/>
          {!_.isEmpty(errorMessage.email) && <Form.Label className="error">{errorMessage.email}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control type="text" placeholder="Enter experience" name="experience" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.experience)}/>
          {!_.isEmpty(errorMessage.experience) && <Form.Label className="error">{errorMessage.experience}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" name="location" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.location)}/>
          {!_.isEmpty(errorMessage.location) && <Form.Label className="error">{errorMessage.location}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="url">
          <Form.Label>Github url</Form.Label>
          <Form.Control type="text" placeholder="Enter url" name="url" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.url)}/>
          {!_.isEmpty(errorMessage.url) && <Form.Label className="error">{errorMessage.url}</Form.Label>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Skills Required</Form.Label>
          <Form.Select aria-label="Default select example" name="skills" onChange={(e) => handleChange(e)} isInvalid={!_.isEmpty(errorMessage.skills)}>
            {skills.map((element) => <option key={element}>{element}</option>)}
          </Form.Select>
          {!_.isEmpty(errorMessage.skills) && <Form.Label className="error">{errorMessage.skills}</Form.Label>}
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
      </Container>
    </Layout>
  );
};

export default EditProfile;