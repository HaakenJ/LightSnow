import React from 'react';
// import 'bootstrap/dist/css/boostrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import DisplayBox from './components/DisplayBox';
import Menu from './components/Menu';
import './App.css';

const resorts = ['Alpental', 'Crystal', 'Stevens', 'Snoqualmie', 'Baker'];

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <Nav/>
      <Container>
        <Row>
          <Sidebar>
            <Menu title="Choose a location" subtitle="places" items={resorts} />
          </Sidebar>
          <DisplayBox></DisplayBox>
        </Row>
      </Container>
    </div>
  );
}

export default App;
