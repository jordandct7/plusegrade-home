import React from 'react'
import { Container,Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap'
import homePageArrow from '../../src/assets/homepage-arrow.webp'
import heroBG from '../assets/BackGround/heroBG.webp'

export default function Hero() {
   
    return (
        <Container className="hero overlay" style={{backgroundImage: `url(${heroBG})`, backgroundSize: 'cover', Left: 0, backgroundPosition: 'center', minWidth: '100%', height: '100%' }}>
            <Container className= "widthContainer" >
              <Row>
                <Col className='col-7'>
                <h1>
                  Ancillary revenue products your customers will love
                </h1>
                <p className='hero-paragraph'>
                Over 200 companies worldwide trust Plusgrade’s ancillary offerings and loyalty expertise to create incredible travel experiences and new revenue opportunities.
                </p>
                <ButtonGroup aria-label="Basic example" className="hero-buttons">
                  <Button variant="btn" className="btn btn-danger btn-orange">See a demo</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Basic example" className="hero-buttons">
                  <Button variant="btn btn-primary btn-blue">Contact sales</Button>
                </ButtonGroup>
                </Col>
                <Col className='col-3'>
                <Image className='arrow' src={homePageArrow} alt='Two friends reaching the summit of a mountain together'/>
                </Col>
              </Row>
            </Container>

        </Container>
  )
}
