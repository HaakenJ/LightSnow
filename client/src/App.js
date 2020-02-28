import React from 'react';
// import 'bootstrap/dist/css/boostrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <Nav/>
      <Container>
        <Row>
          <Sidebar />
        </Row>
      </Container>
    </div>
  );
}

export default App;
