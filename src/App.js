import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

const App = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col md={2} lg={2} className="bg-success min-vh-100 p-2">
            <Navbar bg="success" variant="dark" expand="sm" className="flex-column">
              <Navbar.Brand className="mx-auto d-flex justify-content-center mb-4"><h3>My Profile</h3></Navbar.Brand>
              <Nav className="flex-column w-100">
                <Nav.Link href="/">
                  <Button
                    variant="dark"
                    size="lg"
                    style={{ fontSize: '17px' }}
                    className={`mx-auto d-flex justify-content-center w-50 levitate-btn ${selectedButton === 'home' ? 'stay-levitated' : ''}`}
                    onClick={() => handleButtonClick('home')}
                  >
                    Home
                  </Button>
                </Nav.Link>
                <Nav.Link href="/about">
                  <Button
                    variant="dark"
                    size="lg"
                    style={{ fontSize: '17px' }}
                    className={`mx-auto d-flex justify-content-center w-50 levitate-btn ${selectedButton === 'about' ? 'stay-levitated' : ''}`}
                    onClick={() => handleButtonClick('about')}
                  >
                    About
                  </Button>
                </Nav.Link>
                <Nav.Link href="/skills">
                  <Button
                    variant="dark"
                    size="lg"
                    style={{ fontSize: '17px' }}
                    className={`mx-auto d-flex justify-content-center w-50 levitate-btn ${selectedButton === 'skills' ? 'stay-levitated' : ''}`}
                    onClick={() => handleButtonClick('skills')}
                  >
                    Skills
                  </Button>
                </Nav.Link>
                <Nav.Link href="/contact">
                  <Button
                    variant="dark"
                    size="lg"
                    style={{ fontSize: '17px' }}
                    className={`mx-auto d-flex justify-content-center w-50 levitate-btn ${selectedButton === 'contact' ? 'stay-levitated' : ''}`}
                    onClick={() => handleButtonClick('contact')}
                  >
                    Contact
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>

          <Col md={9} lg={10} className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
