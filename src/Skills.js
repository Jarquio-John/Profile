import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'CSS', 'HTML', 'Bootstrap'];

  return (
    <Container className="mt-5 custom-container">
      <h1 className="text-center mb-4">My Skills</h1>
      <Card className="shadow-sm border-0 custom-card">
      <Card.Body className="text-center p-4 custom-card-body">
          <ul>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Skills;