import React, { Component } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

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
                    <Col sm={4}>
                        <p>North Carolina Sate University<br/>Graduate English Department</p>
                        <p>2211 Hillsborough Street<br/>Raleigh, NC 27695-8105</p>
                    </Col>
                    <Col sm={4}>
                        <p>Lane Smith</p>
                        <p>Advisor: Dr. Margaret Simon</p>
                    </Col>
                    <Col sm={4}>
                        <p>Learn More:</p>
                        <p className='p-shade-txt'><u>MoEML<br/>The Women Writers Project</u></p>
                        <Button variant="primary" onClick={() => this.setState({ show: true })}>Works Cited</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer;