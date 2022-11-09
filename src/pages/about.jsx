import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import "../index.css"

function About() {
  return (
  <div className='about'>
    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> 
          Are you stuck? That sucks... Read this
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          1st option didn't help? Read this now
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
  );
}

export default About;