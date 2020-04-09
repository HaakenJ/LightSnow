import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

class WeatherForm extends React.Component {
    constructor() {
        super();
        this.state = {
            places: ["Alpental", "Crystal", "Stevens", "Snoqualmie", "Baker"]
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
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
            <Form>
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
            </Form>
        );
    }
}

export default WeatherForm;
