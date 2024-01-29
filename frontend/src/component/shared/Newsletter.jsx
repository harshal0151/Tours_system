

import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../../assets/images/male-tourist.png'


const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className="newsletter__content">
                            <h2> Get useful traveling information.</h2>

                            <div className="newsletter__input">
                                <input type="text" placeholder='Search Information' />
                                <button className="btn newsletter__btn">Search</button>
                            </div>

                            <p>
                                We believe in a travelling
                                experience by providing our tour plan that suits your the best!
                            </p>
                        </div>
                    </Col>
                    { /*
                <Col lg= '6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                       </Col>*/}
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter