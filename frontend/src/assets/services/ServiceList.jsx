

import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap"

import weatherImg from '../images/weather.png'
import guideImg from '../images/guide.png'
import customizationImg from '../images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    imgUrl: customizationImg,
    title: " customization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    url: "#"
  },
]



const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}

    </>

  )
}

export default ServiceList