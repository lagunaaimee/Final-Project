import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

export default class Forum extends Component {
  state = {
    forum: []
  };

  componentDidMount() {
    this.loadForum();
  }

  loadForum = () => {
    API.getForum()
      .then(res => this.setState({ forum: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Forum</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Forum On My List</h1>
            </Jumbotron>
            {this.state.forum.length ? (
              <List>
                {this.state.forum.map(forum => (
                  <ListItem key={forum._id}>
                    <a href={"/forum/" + forum._id}>
                      <strong>
                        {forum.title} by {forum.author}
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
      </div>
    );
  }
}


