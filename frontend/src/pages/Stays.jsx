import Featured from "../component/featured-stays/Featured";
import FeaturedProperties from "../component/featuredProperties/FeaturedProperties";
import { Container, Row, Col } from "reactstrap";
import PropertyList from "../component/propertyList/PropertyList";
import ServiceHeader from "../component/services-header/ServiceHeader";
import "../styles/services.css";
import CarRentHeader from "../component/CarRent-Header/CarRentHeader";
import HotelSlider from "../component/UI/HotelSlider";

const Stays = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <CarRentHeader />
      <HotelSlider />
      <ServiceHeader />
      
      <section>
        <Container>
          <Row>
            <Col lg="12"></Col>
          </Row>
        </Container>
      </section>

      <section >
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
        </div>
      </section>
    </div>
  );
};

export default Stays;
