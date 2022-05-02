import React, { Component } from 'react';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';

class Footer extends Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
    }
    render(){
        return (
            <Container className='p-footer'>
                <Modal show={this.state.show} onHide={() => this.setState({ show :false })}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body><p>Whitney, Isabella. "Will and Treatment by Isabella Whitney." <i>Poetry Foundation</i>, Poetry Foundation, 2022, <a href="https://www.poetryfoundation.org/poems/45991/will-and-testament">https://www.poetryfoundation.org/poems/45991/will-and-testament</a></p> </Modal.Body>
                </Modal>
                <Row>
                    <span>Footer Here</span>
                </Row>
                <Button variant="primary" onClick={() => this.setState({ show: true })}>Works Cited</Button>
            </Container>
        )
    }
}

export default Footer;