import React from "react";
// import "bootstrap/dist/css/boostrap.min.css";
import { Container, Row } from "react-bootstrap";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import DisplayBox from "./components/DisplayBox";
import Menu from "./components/Menu";
import CheckForm from "./components/CheckForm";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const resorts = ["Alpental", "Crystal", "Stevens", "Snoqualmie", "Baker"];
const hours = createTimeArr(24);

let minutes = createTimeArr(60);

function createTimeArr(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i < 10) {
      let j = i.toString();
      j = "0" + j;
      arr.push(j);
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <Nav/>
      <Container>
        <Row>
          <Sidebar>
            <Menu title="Choose a location" subtitle="Places" items={resorts} />
            <Menu title="Choose a time" subtitle="Hour" items={hours} items2={minutes} subtitle2="Minutes" />
            <div className="mt-3">
              <CheckForm formLabel="Units" labelArr={ ["Imperial", "Metric"] } />
              <CheckForm formLabel="Temperature" labelArr={ ["High", "Low", "Average", "Current"] } />
              <CheckForm formLabel="Moisture" labelArr={ ["Snow Accumulation", "Humidity"] } />
              <CheckForm formLabel="Wind" labelArr={ ["Speed", "Direction"] } />
            </div>
          </Sidebar>
          <DisplayBox>
              <Row>
                <WeatherCard title="Local Time" body="07:02" />
                <WeatherCard title="Wind Speed" body="14 MPH" />
                <WeatherCard title="Wind Direction" body="SW" />
              </Row>
              <Row>
                <WeatherCard title="Temperature" body="30 deg F" />
                <WeatherCard title="Chill Factor" body="18 deg F" />
                <WeatherCard title="Humidity" body="40%" />
              </Row>
              <Row>
                <WeatherCard title="Precipitation" body="60%" />
              </Row>
          </DisplayBox>
        </Row>
      </Container>
    </div>
  );
}

export default App;
