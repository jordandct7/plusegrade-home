import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Certified from '../assets/IconsAssets/certified1.webp'
import Revenue from '../assets/IconsAssets/revenueOpp2.webp'
import ZeroRisk from '../assets/IconsAssets/noEntry3.webp'
import Bullseye from '../assets/IconsAssets/bullseye4.webp'
import Verified from '../assets/IconsAssets/approved5.webp'
import Loyalty from '../assets/IconsAssets/loyalty-circles6.webp'

export default function FirstChoice() {
  return (
    <Container className='first-choice-cont'>
      <h4 className='partners partners-orange'>Why we’re the first choice</h4>

      <Row className='first-choice-row'>
        <Col className='col-4'>
          <Image src={Certified}/>
          <h3>Quick integration &
            white-label solutions</h3>
        </Col>
        <Col className='col-4'>
          <Image src={Revenue}/>
          <h3>Direct
            revenue stream</h3>
        </Col>
        <Col className='col-4'>
          <Image src={ZeroRisk}/>
          <h3>Zero-risk &
            no upfront costs</h3>
        </Col>
      </Row>
      <Row className='first-choice-row'>
        <Col className='col-4'>
          <Image src={Bullseye}/>
          <h3>Intelligent targeting &
            decision engines</h3>
        </Col>
        <Col className='col-4'>
          <Image src={Verified}/>
          <h3>Proven year-over-year
            revenue growth</h3>
        </Col>
        <Col className='col-4'>
          <Image src={Loyalty}/>
          <h3>Loyalty program
            integration</h3>
        </Col>
      </Row>

    </Container>
  )
}
