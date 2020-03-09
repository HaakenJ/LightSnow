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
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {subtitle}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "scroll" }}>
                    {items.map(item => 
                        <Dropdown.Item href="#">{item}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Menu;