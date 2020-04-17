import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CheckForm from '../CheckForm';
import './style.css';

class WeatherForm extends React.Component {
    constructor() {
        super();
        this.state = {
            places: ["Alpental", "Crystal", "Stevens", "Snoqualmie", "Baker"],
            units: 'Imperial',
            hour: "00",
            minute: "00",
            location: "",
            units: "Imperial",
            unitArr: ["Imperial", "Metric"],
            tempArr: ["High", "Low", "Average", "Current"],
            moistArr: ["Snow Accumulation", "Humidity"],
            windArr: ["Speed", "Direction"]
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(event.LocationSelect);
    }

    getPlaces = () => {
        //TO-DO get places from MongoDB
    }

    onCheckboxChange = (event) => {
        console.log(event.target.name);
    }

    render() {
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

        return (
            <Form className='mt-2 mb-2'>
                <Form.Group controlId="LocationSelect">
                    <Form.Label>
                        <h3>Select a location</h3>
                    </Form.Label>
                    <Form.Control as="select">
                        { this.state.places.map(place => 
                            <option>{place}</option>
                        ) }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="TimeSelect">
                    <Form.Label>
                        <h3>Select a Time</h3>
                    </Form.Label>
                    <h5>Hour</h5>
                    <Form.Control as="select">
                        { hours.map(hour => 
                            <option>{hour}</option>
                        ) }
                    </Form.Control>
                    <h5>Minute</h5>
                    <Form.Control as="select">
                        { minutes.map(minute => 
                            <option>{minute}</option>
                        ) }
                    </Form.Control>
                </Form.Group>

                {/* Unit Checkboxes */}
                <fieldset>
                    <Form.Label>Units</Form.Label>
                    <Form.Group className='d-flex flex-wrap' controlId="units">
                        { this.state.unitArr.map(item => 
                            <Form.Check onChange={this.onCheckboxChange} className='mr-2 ml-2' name={item} type='radio' label={item} />
                        ) }
                    </Form.Group>
                </fieldset>

                {/* Temp Checkboxes */}
                <Form.Label>Temperature</Form.Label>
                <Form.Group className='d-flex flex-wrap' controlId="temp">
                    { this.state.tempArr.map(item => 
                        <Form.Check className='mr-2 ml-2' name={item} type='checkbox' label={item} />
                    ) }
                </Form.Group>
                
                {/* Moisture Checkboxes */}
                <Form.Label>Moisture</Form.Label>
                <Form.Group className='d-flex flex-wrap' controlId="moisture">
                    { this.state.moistArr.map(item => 
                        <Form.Check className='mr-2 ml-2' name={item} type='checkbox' label={item} />
                    ) }
                </Form.Group>

                {/* Wind Checkboxes */}
                <Form.Label>Wind</Form.Label>
                <Form.Group className='d-flex flex-wrap' controlId="wind">
                    { this.state.windArr.map(item => 
                        <Form.Check className='mr-2 ml-2' name={item} type='checkbox' label={item} />
                    ) }
                </Form.Group>
                
                {/* Submit button */}
                <Button variant="secondary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default WeatherForm;
