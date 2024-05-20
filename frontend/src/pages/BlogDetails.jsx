import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../component/Helmet/Helmet";
import "../styles/blog-details.css";

import avatar from '../assets/images/avatar.jpg'

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title.toLowerCase().replace(/\s+/g, '-') === slug);

  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', comment: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  useEffect(() => {
    // Load comments from local storage when the component mounts
    const storedComments = JSON.parse(localStorage.getItem(`comments-${slug}`)) || [];
    setComments(storedComments);
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComments = [...comments, form];
    setComments(newComments);
    localStorage.setItem(`comments-${slug}`, JSON.stringify(newComments)); // Save comments to local storage
    setForm({ name: '', email: '', comment: '' }); // Reset the form
  };

  if (!blog) {
    return (
      <Helmet title="Blog Not Found">
        <Container>
          <Row>
            <Col>
              <h2 className="section__title">Blog Not Found</h2>
              <p>The blog you are looking for does not exist.</p>
            </Col>
          </Row>
        </Container>
      </Helmet>
    );
  }

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt={blog.title} className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>
                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>
                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              {/* =============== Comment Form ============ */}
              <div className="leave__comment-form mt-5">
                <h4>Leave a Comment</h4>
                <p className="section__description">
                  You must sign in to make or comment on a post
                </p>

                <Form onSubmit={handleSubmit}>
                  <FormGroup className="d-flex gap-3">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <textarea
                      name="comment"
                      rows="5"
                      className="w-100 py-2 px-3"
                      placeholder="Comment..."
                      value={form.comment}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </FormGroup>

                  <button type="submit" className="btn comment__btn mt-3">
                    Post a Comment
                  </button>
                </Form>
              </div>

              {/* =============== Display Comments ============ */}
              <div className="comments-section mt-5">
                <h4>Comments</h4>
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div key={index} className="comment mb-4 d-flex">
                      <div className="comment-avatar">
                        <img src={avatar} alt="" width={"50px"} className="rounded-circle"/>
                      </div>
                      <div className="comment-content ms-3">
                        <h6 className="fw-bold">{comment.name}</h6>
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No comments yet. Be the first to comment!</p>
                )}
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className="fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt={item.title} className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
