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
            </Form>
        );
    }
}

export default WeatherForm;
