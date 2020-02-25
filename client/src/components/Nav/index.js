import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <span className="logo">
                    <i class="far fa-snowflake"></i>
                </span>
                {' '}
                LightSnow
            </Navbar.Brand>
        </Navbar>
    )
}

export default Nav;