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
       
          <Col size="lg-12">
           {/* Image displayed at top of page */}
            <div className="col-md-12 text-center">
              <img className="img-fluid rounded" src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
              </img>
            </div>
          </Col>

          <br></br>

          <Row>
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
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>My Blogs</h1>
            </Jumbotron> */}
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
