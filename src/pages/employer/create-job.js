import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../../components/layout'
import _ from "underscore";
import Container from 'react-bootstrap/Container';

const CreateJob = () => {
  const [jobInfo, setInfo] = useState({});

  function handleChange(e) {
    jobInfo[e.target.name] = e.target.value;
    jobInfo['id'] = Math.floor(Math.random() * (2000 - 1001 + 1) + 1001)
    setInfo(jobInfo);
  }

  function handleSubmit() {
    let jobs = JSON.parse(localStorage.getItem('jobs'));
    if(_.isEmpty(jobs)) {
      localStorage.setItem("jobs", JSON.stringify([jobInfo]));
    } else {
      jobs.push(jobInfo);
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
  }

  return (
    <Layout title="All Jobs">
      <Container className="p-5 mb-4 bg-light rounded-3">
      <Form>
      <Form.Group className="mb-3" controlId="company">
          <Form.Label>Company name</Form.Label>
          <Form.Control type="text" placeholder="Company" name="company" onChange={(e) => handleChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Job title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" onChange={(e) => handleChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" name="description" onChange={(e) => handleChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" name="location" onChange={(e) => handleChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="salary">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="Salary" name="salary" onChange={(e) => handleChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Skills Required</Form.Label>
          <Form.Control type="text" placeholder="Skills" name="skills" onChange={(e) => handleChange(e)}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </Container>
    </Layout>
  );
};

export default CreateJob;