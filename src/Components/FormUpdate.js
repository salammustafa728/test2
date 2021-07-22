import React, { Component } from 'react'
import { Modal, Form } from "react-bootstrap";
import './Modal.css'
export class FormUpdate extends Component {
    render() {
        return (
            <div>
                <Modal.Dialog style={{borderRadius:'20px',backgroundColor:'#EDEDED'}}>
                    <Modal.Header>
                        <Modal.Title style={{}}>Change Drink Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.props.updateData} >
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label></Form.Label>
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
