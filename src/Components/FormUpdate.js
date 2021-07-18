import React, { Component } from 'react'
import { Modal, Button, Form } from "react-bootstrap";

export class FormUpdate extends Component {
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Change Drink Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.props.updateData} >
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Edit Favorite Drink</Form.Label>
                        <Form.Control
                            type="text" placeholder="Enter name"  />
                    </Form.Group>
                    <button className="btn btn-primary" type="submit">Save</button>
                </Form>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }
}

export default FormUpdate
