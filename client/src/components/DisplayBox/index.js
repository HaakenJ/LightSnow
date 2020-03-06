import React from 'react';
import { Col } from 'react-bootstrap';
import './style.css';

function Sidebar(props) {
    return (
        <Col xs={12} lg={8} className="display-box">
            {props.children}
        </Col>
    )
}

export default Sidebar;