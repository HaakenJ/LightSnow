import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                {' '}
                LightSnow
            </Navbar.Brand>
        </Navbar>
    )
}

export default Nav;