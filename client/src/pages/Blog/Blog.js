import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Blog extends Component {
  state = {
    blog: []
  };

  componentDidMount() {
    this.loadBlog();
  }

  loadBlog = () => {
    API.getBlog()
      .then(res => this.setState({ blog: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* Blog Title Jumbotron */}
          <Col size="md-12">
            <Jumbotron>
              <h1>Blog</h1>
            </Jumbotron>
          </Col>

          {/* Blog Form Input */}
          <Col size="md-6">
          <form>
              <Input name="title" placeholder="Blog Title (required)" />
              <Input name="author" placeholder="User Name (required)" />
              <TextArea name="synopsis" placeholder="Blog Details (required)" />
              <FormBtn>Post</FormBtn>
          </form>
          </Col>

          {/*Saved Blogs from database displayed here */}
          <Col size="md-12">
            <Jumbotron>
              <h1>My Blogs</h1>
            </Jumbotron>
            {this.state.blog.length ? (
              <List>
                {this.state.blog.map(blog => (
                  <ListItem key={blog._id}>
                    <a href={"/blog/" + blog._id}>
                      <strong>
                        {blog.title} by {blog.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blog;
