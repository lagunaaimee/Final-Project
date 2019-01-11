import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Resources extends Component {
  state = {
    resources: [],
    title: "",
    link: "",
  };
  
  componentDidMount() {
    this.loadResources();
  }

  loadResources = () => {
    API.getResources()
      .then(res => this.setState({ resources: res.data, title:"", link:"" }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Resources</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Save</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Saved Resources</h1>
            </Jumbotron>
            {this.state.resources.length ? (
              <List>
                {this.state.resources.map(resource => {
                  return (
                  <ListItem key={resource._id}>
                    <a href={"/resources/" + resource._id}>
                      <strong>
                        {resource.title} by {resource.link}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                  );
                  })}
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

export default Resources;
