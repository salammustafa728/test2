import React, { Component } from 'react'
import { Modal, Button, Form } from "react-bootstrap";

export class FormUpdate extends Component {
    render() {
        return (
            <div>

                {/* <Modal show={this.props.show} onHide={this.props.closeModal}>
                   
                    <Modal.Header closeButton>
                        <Modal.Title>Update FORM</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> */}
                {/* <Form onSubmit={(e)=>this.props.updateData(e)} show={this.props.show} onHide={this.props.closeModal}>
                        {console.log('this.props.updateData',this.props.updateData)}
                            <Form.Group className="mb-3" controlId="namefrm">
                                <Form.Label>name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    name="name"
                                    defaultValue={this.props.modalObj.name}
                                />
                                 {console.log('this.props.modalObj.name',this.props.modalObj.name)}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="urlfrm">
                                <Form.Label>url</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter url"
                                    name="url"
                                    defaultValue={this.props.modalObj.url}
                                />
                                  {console.log('this.props.modalObj.url',this.props.modalObj.url)}
                            </Form.Group>
                            <button className="btn btn-primary">Save Changes</button>
                        </Form> */}
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form onSubmit={this.props.updateData} >
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Edit Favorite Drink</Form.Label>
                        <Form.Control
                            type="text" placeholder="Enter name"  />

                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="url">

                        <Form.Control
                            type="text"  placeholder="Enter url" />

                    </Form.Group> */}

                    <button className="btn btn-primary" type="submit">Save Changes</button>
                </Form>
                    </Modal.Body>

                    {/* <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer> */}
                </Modal.Dialog>
               
                {/* </Modal.Body>
                </Modal> */}
            </div>
        )
    }
}

export default FormUpdate
