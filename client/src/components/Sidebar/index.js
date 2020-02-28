import React, { Children } from 'react';
import { Col } from 'react-bootstrap';
import './style.css';

function Sidebar() {
    return (
        <Col xs={12} lg={3} className="sidebar">
            {Children}
        </Col>
    )
}

export default Sidebar;