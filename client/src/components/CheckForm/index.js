import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

function CheckForm({
    labelArr
}) {
    return (
        <Form className="mt-4">
            <Form.Group className='d-flex' controlId="formBasicCheckbox">
                {labelArr.map(label => 
                    <Form.Check className="mr-2 ml-2" type="checkbox" label={label} />
                )}
            </Form.Group>
        </Form>
    )
}

export default CheckForm;