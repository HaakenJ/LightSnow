import React from 'react';
import { Dropdown } from 'react-bootstrap';

function Menu({
    title,
    subtitle,
    items
}) {
    return (
        <div>
            <h3>{title}</h3>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {subtitle}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {items.map(item => {
                        <Dropdown.Item href="#">resort</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}