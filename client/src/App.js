import React from 'react';
// import 'bootstrap/dist/css/boostrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import DisplayBox from './components/DisplayBox';
import Menu from './components/Menu';
import './App.css';

const resorts = ['Alpental', 'Crystal', 'Stevens', 'Snoqualmie', 'Baker'];
const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 
"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <Nav/>
      <Container>
        <Row>
          <Sidebar>
            <Menu title="Choose a location" subtitle="Places" items={resorts} />
            <Menu title="Choose a time" subtitle="Hour" items={hours} />
          </Sidebar>
          <DisplayBox></DisplayBox>
        </Row>
      </Container>
    </div>
  );
}

export default App;
