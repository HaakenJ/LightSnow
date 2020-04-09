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
            
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(event.LocationSelect);
    }

    getPlaces = () => {
        //TO-DO get places from MongoDB
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
                <Form.Label>Units</Form.Label>
                <CheckForm controlId='Units' labelArr={ ["Imperial", "Metric"] } />
                <Form.Label>Temperature</Form.Label>
                <CheckForm controlId='Temp' labelArr={ ["High", "Low", "Average", "Current"] } />
                <Form.Label>Moisture</Form.Label>
                <CheckForm controlId='Moisture' labelArr={ ["Snow Accumulation", "Humidity"] } />
                <Form.Label>Wind</Form.Label>
                <CheckForm controlId='Wind' labelArr={ ["Speed", "Direction"] } />
                <Button variant="secondary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default WeatherForm;
