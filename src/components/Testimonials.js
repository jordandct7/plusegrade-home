import React from 'react'
import { Container, Image, Col, Row, Carousel, CarouselItem } from 'react-bootstrap'
import TestimonialsBG from '../assets/BackGround/HomeTestimonials.webp'
import icon from '../assets/IconsAssets/testimonial-white.webp'
import { CarouselControl } from 'reactstrap'

export default function Testimonials() {
  return (
    <Container className='testimonials w-100' style={{backgroundImage: `url(${TestimonialsBG})`, backgroundSize: 'cover', Left: 0, backgroundPosition: 'center', minWidth: '100%', height: '100%' }}>
      <Container >
      <Col>
        <Row>
          <Image src={icon} className='icon-img'/>
        </Row>
      </Col>  
      <Col>
        <Row>
          <h4 className='partners partners-orange'>What our partners say</h4>  
        </Row>
      </Col>
      <Carousel className='carousel'>
          <CarouselItem className= 'active' style={{margin: 'auto'}}>
            <h3>
            "Our partnership with Plusgrade has over-delivered on customer engagement and continues to deliver meaningful ancillary revenue."
            </h3>
            <h4>-Manager, Ancillary Revenue, Qantas</h4>
          </CarouselItem>
          <CarouselItem>
            <h3>"Dynamic Seat Blocker is the exact innovation we were looking for to ensure that our guests fly confidently. However passengers want to fly, with someone sitting next to them or not, Seat Blocker gives them the power to decide."</h3>
            <h4>-Umesh Chhiber, Senior Vice President - Revenue Optimization & Pricing, Oman Air</h4>
          </CarouselItem>
      </Carousel>
      <CarouselControl className='carousel-control'/>

      </Container>
    </Container>
  )
}

