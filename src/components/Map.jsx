import React, { Component } from 'react';
import { MapInteractionCSS , MapInteraction} from 'react-map-interaction';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {Poem} from './Poem'

class Map extends Component{

    constructor(props){
        super(props)
        this.state = {
            img : './images/map.jpeg',
            value: {
                scale: 0.170177,
                translation: { x: -2.4473, y: 206.816 }
            }
            // translate(-2.44737px, 206.816px) scale(0.170177)
        }
    }

    handleMakeChange = (tagClass) => {
        this.setState({ img: tagClass  })
        const element = document.querySelector(`.${tagClass}`)
        element.scrollIntoView({ behavior: 'smooth'});
        const checkOlder  = document.querySelector(`.highlight`);
        if(checkOlder){
            checkOlder.classList.remove('highlight');
        }
        element.classList.add('highlight');
    }

    render(){
        // console.log( this.state.value )
        const { img } = this.state
        const checkImages = ['temple-bar', 'birchin-lane', 'cheapeside-market', 'fleete-street', 'fleete-prison']
        return (
            <Container fluid>
                <Row>
                    <Col className='col-sm-7 col-2 fixed-top one'>
                        <Button variant="primary" onClick={() => this.handleMakeChange('birchin-lane')}>Birchin Lane</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('cheapeside-market')}>Cheapside Market</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('fleete-street')}>Fleet Street</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('fleete-prison')}>Fleet Prison</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('temple-bar')}>Temple Bar</Button>
                        <MapInteractionCSS
                            value={this.state.value}
                            onChange={(value) => this.setState({ value })}
                            showControls={true}
                        >
                            {/* {img === 'birchin-lane' && <Image src={`./images/${img}.png`} />}
                            {img === 'cheapeside-market' && <Image src={`./images/${img}.png`} />}
                            {img === 'fleete-street' && <Image src={`./images/${img}.png`} />}
                            {img === 'fleete-prison' && <Image src={`./images/${img}.png`} />}
                            {img === 'temple-bar' && <Image src={`./images/${img}.png`} />} */}
                            { !checkImages.includes(img) 
                                ?  <Image src={img} />
                                :  <Image src={`./images/${img}.jpg`} />
                            }
    
                        </MapInteractionCSS>
                    </Col>
                    <Col md="auto" className='col-sm-5 offset-sm-7 two'>
                        <Poem/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Map;

