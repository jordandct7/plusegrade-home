import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Counters() {
  
  
  return (
    <Container className='counter-container'>
      <Row>
          <Col className='counter'><span>200+</span><p>travel partner</p></Col>
          <Col className='counter'><span>60</span><p>countries</p></Col>
          <Col className='counter'><span>$5B+</span><p>in new revenue opportunities in 2023</p></Col>
          <Col className='counter'><span>5</span><p>industries</p></Col>
          <Col className='counter'><span>25M+</span><p>incredible customer experiences in 2023</p></Col>
      </Row>
    </Container>

  )
}
