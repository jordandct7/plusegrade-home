import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Lufthansa from '../assets/PartnerAssets/home_lufthansa.webp'
import Ethihad from '../assets/PartnerAssets/EtihadGold.webp'
import Marriot from '../assets/PartnerAssets/Home_MarriottBlack.webp'
import AirCanada from '../assets/PartnerAssets/Home_Canada.webp'
import Chase from '../assets/PartnerAssets/Home_Chase.webp'
import Hilton from '../assets/PartnerAssets/Home_Hilton.webp'
import Royal from '../assets/PartnerAssets/RoyalCaribbean.webp'
import Amtrak from '../assets/PartnerAssets/home_amatrak_blue.webp'
import Southwest from '../assets/PartnerAssets/Home_SouthwestAirlines.webp'
import Norwegian from '../assets/PartnerAssets/Norwegian_Cruises_inline.webp'
import Qantas from '../assets/PartnerAssets/Qantas.webp'
import Citi from '../assets/PartnerAssets/Home_CitiBank.webp'


export default function Partners(partnerData) {

  return (

    <Container>

      <Container>
        <Row>
          <h4 className='partners partners-blue'>See the innovators in ancillary revenue</h4>
          <p className="partners-p">We are powering amazing customer experiences for incredible companies worldwide.</p>
        </Row>
      </Container>
      <Container>
      
        <Row className='align-items-center'>
          <Col className='col-3'>
            <Image src={Lufthansa} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Ethihad} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Marriot} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={AirCanada} className='icon_img'></Image>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col className='col-3'>
            <Image src={Chase} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Hilton} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Royal} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Amtrak} className='icon_img'></Image>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col className='col-3'>
            <Image src={Southwest} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Norwegian} className='icon_img'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Qantas} className='center-block'></Image>
          </Col>
          <Col className='col-3'>
            <Image src={Citi} className='center-block'></Image>
          </Col>
        </Row>
      </Container>
      <Container className='btn-con'>
        <Row>
          <Col className='text-center'>
            <Button>See all Partners</Button>
          </Col>
        </Row>
      </Container>
    </Container>

  
  )
}

