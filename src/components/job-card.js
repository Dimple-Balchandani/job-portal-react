import React from "react";
import Card from 'react-bootstrap/Card'

export default function JobCard(props) {
  const { title, description, skills, location } = props.job;
  return (
    <Card style={{ marginBottom: '1rem' }} onClick={() => {window.location.href="/job/"+props.job.id}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
          <div>{description}</div> 
          <div><b>Skills Required:</b> {skills}</div> 
          <div><b>Location:</b> {location}</div>
      </Card.Body>
    </Card>
  )
}