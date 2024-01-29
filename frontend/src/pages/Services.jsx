
import { Container, Row, Col } from 'reactstrap'
import "../styles/services.css"
import CarRentals from './CarRentals'

const Services = () => {
  window.scrollTo(0,0)

  return (
   
<div>
      <section className="p-0 hero__slider-section">
         <Container>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      <CarRentals/>
    
      </section>

    
    </div>
    
  );
};

export default Services