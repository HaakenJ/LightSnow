import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

function CheckForm({
    labelArr,
    controlId
}) {
    return (
        <Form.Group className='d-flex flex-wrap' controlId={controlId}>
            { labelArr.map(label => 
                <Form.Check className='mr-2 ml-2' type='checkbox' label={label} />
            ) }
        </Form.Group>
    )
}

export default CheckForm;