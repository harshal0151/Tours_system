import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/CommonSection";
import BlogList from "../component/UI/BlogList";
import CarRentHeader from "../component/CarRent-Header/CarRentHeader";

const Blog = () => {
  return (
    <Helmet title="Blogs">
        <CarRentHeader />
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
