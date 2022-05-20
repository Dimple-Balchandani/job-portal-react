import React from "react";
import Card from 'react-bootstrap/Card'

export default function JobCard(props) {
  const { title, description, skills, location } = props.job;
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div>{description}</div> 
          {/* <div>{salary}</div>  */}
          <div><b>Skills:</b> {skills}</div> 
          <div><b>Location:</b> {location}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}