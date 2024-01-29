import React ,{useRef}from 'react'
import './search-bar.css'
import { Button, Col, Form, FormGroup } from "reactstrap"
import { Link } from 'react-router-dom'


const ServicesBar = () => {




    return (  <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-5'>
                <FormGroup className="d-flex gap-3 form__group   ">
                    <span>
                        
                    <Link to='#'> <i className="ri-hotel-bed-line"></i></Link>
                    </span>
                    <div> 
                        <h6>Stays</h6>
                        <input type="text" placeholder="Where are you stay?"   />
                    </div>
                </FormGroup>

                <FormGroup className="d-flex gap-3 form__group  ">
                    <span>
                    <Link to='#'><i className="ri-flight-takeoff-line"></i></Link>
                    </span>
                    <div>
                        <h6>Flights</h6>
                        <input type="text" placeholder="Where are you going?"   />
                    </div>
                </FormGroup>

                <FormGroup className="d-flex gap-3 form__group  ">
                    <span>
                    <Link to='#'> <i className="ri-hotel-line"></i></Link>
                    </span>
                    <div>
                        <h6>Hotels</h6>
                        <input type="text" placeholder="budget hotels?"  />
                    </div>
                </FormGroup>

                <FormGroup className="d-flex gap-3 form__group ">
                    <span>
                    <Link to='#'>   <i className="ri-car-line"></i></Link>
                    </span>
                    <div>
                        <h6>Car rentals</h6>
                        <input type="text" placeholder="budgest rentals car"   />
                    </div>
                </FormGroup>
                <span className="search__icon" type='submit' >
                <i className="ri-search-line"></i>
                </span>
            </Form>
        </div>   
     </Col>
   )
}

export default ServicesBar;