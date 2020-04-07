import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

class WeatherForm extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <Form>

            </Form>
        );
    }
}

export default WeatherForm;
