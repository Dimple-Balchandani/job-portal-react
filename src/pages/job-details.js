import React, { useState, useEffect, useContext } from "react";
import Container from 'react-bootstrap/Container';
import {UserContext} from '../contexts/userContext';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Layout from '../components/layout'

const details = {"id":1,"title":"Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","salary":1041,"skills":"webpack","location":"Suphan Buri", "applicants_id": [2,3]};

const JobsDetails = (props) => {
  const [jobDetails, setJobDetails] = useState(details);
  const userContext = useContext(UserContext);
  const {user} = userContext.state;
  let navigate = useNavigate();

  useEffect(() => {
    getJobDetails();
  }, []);

  const getJobDetails = () => { 
    setJobDetails(jobDetails);
    localStorage.setItem(props.id, JSON.stringify(jobDetails));
  }
  
  function applyToJob() {
    //make post call and redirect to job listing page on success
    navigate("/jobs", { replace: true });
  }

  return (
    <div>
    <Layout title="Job details">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <div><b>Id: </b>   {jobDetails.id}</div>
        <div><b>Title:</b> {jobDetails.title}</div>
        <div><b>Description: </b>   {jobDetails.description}</div>
        <div><b>Salary:</b>    {jobDetails.salary}</div>
        <div><b>Skills: </b>   {jobDetails.skills}</div>
        <div><b>Location: </b>   {jobDetails.location}</div>
        {user.type ==="employer" && <div>
          <div><b>No of Applicants :</b> {jobDetails.applicants_id.length}</div>
          {jobDetails.applicants_id.map(id=> (<div key={id}><a href={`/employee/${id}`}> {id}</a></div>))}
          </div>}
        {user.type==="employee" && <Button variant="primary" type="submit" onClick={() => applyToJob()}>
            Apply
          </Button>}
      </Container>
    </Layout>
    </div>
    )

}
export default JobsDetails;
