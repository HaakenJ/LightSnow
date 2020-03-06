import React from 'react';
import { Dropdown } from 'react-bootstrap';

function Menu(props) {
    return (
        <div>
            <h3>Ski Resort</h3>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Resorts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.resorts.map(resort => {
                        <Dropdown.Item href="#">resort</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <h3>Weather Parameters</h3>
            <h3>Alarm Time</h3>
        </div>
    )
}