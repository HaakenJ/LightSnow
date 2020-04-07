import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './style.css';

function WeatherCard(props) {
    return (
        <Col sm={12} md={4}>
            <Card className='weather-card mt-5'>
                <Card.Title>
                    { props.title }
                </Card.Title>
                    <Card.Text>
                    { props.body }
                </Card.Text>
            </Card>
        </Col>
    )
}

export default WeatherCard;