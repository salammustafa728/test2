import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'


export class Header extends Component {
    render() {
        return (
            <div>
                <Nav defaultActiveKey="/" as="ul" style={{display:"flex",background:"#FFDADA"}}>
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/favorite">favorite</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Header
