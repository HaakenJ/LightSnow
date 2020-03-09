import React from 'react';
import { Dropdown } from 'react-bootstrap';

function Menu({
    title,
    subtitle,
    items,
    items2,
    subtitle2
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

            { items2 ? 
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {subtitle2}
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "scroll" }}>
                        {items2.map(item => 
                            <Dropdown.Item href="#">{item}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                    : ""
                }
        </div>
    )
}

export default Menu;