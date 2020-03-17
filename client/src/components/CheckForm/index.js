import React from 'react';
import { Form } from 'react-bootstrap';

function CheckForm(props) {
    return (
        <Form>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={props.label} />
            </Form.Group>
        </Form>
    )
}