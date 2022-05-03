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
                <Modal 
                    show={this.state.show} 
                    onHide={() => this.setState({ show :false })}
                    size="lg"
                    centered
                    aria-labelledby="contained-modal-title-vcenter"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Works Cited
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Whitney, Isabella. "Will and Treatment by Isabella Whitney." <i>Poetry Foundation</i>, Poetry Foundation, 2022, <a href="https://www.poetryfoundation.org/poems/45991/will-and-testament">https://www.poetryfoundation.org/poems/45991/will-and-testament</a></p> 
                        <p>Jenstad, Janelle. “The Agas Map.” <span className='txt-italic'>The Map of Early Modern London</span>, Edition 6.6, edited by Janelle Jenstad, U of Victoria, 30 Jun. 2021, <a href='https://mapoflondon.uvic.ca/edition/6.6/map.htm'> mapoflondon.uvic.ca/edition/6.6/map.htm</a>.</p>
                        <p>Wisnicki, Adrian S., with Heather F. Ball, Jared McDonald, and Mary Borgo Ton. Introduction. <span className='txt-italic'>One More Voice</span> (an imprint of <span className='txt-italic'>Livingstone Online</span>), new dawn edition, 2021, <a href='https://onemorevoice.org'>https://onemorevoice.org</a>.</p>
                    </Modal.Body>
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
                        <p className='p-anchor'><a href="https://www.wemmol.com/">Learn More</a></p>
                        <Button variant="primary" onClick={() => this.setState({ show: true })}>Works Cited</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer;