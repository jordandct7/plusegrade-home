import React from 'react'
import { Container, Row, Col,Image, Button } from 'react-bootstrap'
import LearnMoreBG from '../assets/BackGround/HomeProducts.webp'
import Plus from '../assets/IconsAssets/plus-orange2.webp'
import LoyaltyBlue from '../assets/IconsAssets/loyaltyCirclesBlue2.webp'

export default function LearnMore() {
  return (
    <Container className='hero learn-more-cont' style={{backgroundImage: `url(${LearnMoreBG})`, backgroundSize: 'cover', Left: 0, backgroundPosition: 'center', minWidth: '100%', height: '100%'}}>
      <Row className='learn-more-top-row'>
        <Col className='learn-more-top-row-cont'>
          <h4 className='partners-white'>Plusgrade brings together the products that spark joy in the traveler journey.</h4>
        </Col>
      </Row>
      <Row className='learn-more-row '>
        <Col className='learn-more-col'>
          <Image src={Plus}/>
          <h3 className='LM-h4h3'>Ancillary Revenue Experiences</h3>
          <Col className='border-orange'>
          <p className='copy'>The leading portfolio of ancillary revenue solutions for the global travel industry. We focus on generating significant and high-margin revenue enhancements and high-impact customer experiences.</p>
          </Col>
          <Button className='btn-light'>Learn More</Button>
        </Col>
        <Col className='learn-more-col'>
          <Image src={LoyaltyBlue}/>
          <h3 className='LM-h4h3'>Loyalty by Points</h3>
          <Col className='border-blue'>
          <p className='copy'>Points, a Plusgrade company, helps make loyalty program currencies more useful for members, giving them innovative ways to get, move, and keep their points and miles while driving revenue for travel companies.</p>
          </Col>
          <Button className='btn-light'>Learn More</Button>          
        </Col>
      </Row>
    </Container>
  )
}
