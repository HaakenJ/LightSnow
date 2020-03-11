import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "./style.css";

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
            <div className="drop-container">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {subtitle}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "scroll", float: "left" }}>
                        {items.map(item => 
                            <Dropdown.Item href="#">{item}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                { items2 ? 
                    <Dropdown className="ml-2">
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
        </div>
    )
}

export default Menu;