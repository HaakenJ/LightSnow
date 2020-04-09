import React from 'react';
import { Col } from 'react-bootstrap';
import './style.css';

function Sidebar(props) {
    return (
        <Col xs={12} lg={3} className='sidebar mb-4'>
            {props.children}
        </Col>
    )
}

export default Sidebar;