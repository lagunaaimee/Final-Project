import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Resources extends Component {
  state = {
    resources: [],
    title: "",
    link: "",
    thumbnail:"",
  };
  
  componentDidMount() {
    this.loadResources();
  }

  loadResources = () => {
    API.getResources()
      .then(res => this.setState({ resources: res.data, title:"", link:"", thumbnail: "",}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Resources</h1>
            </Jumbotron>
            <form>
              <h3>Search</h3>
              <Input name="search" placeholder="Topic (required)" />
              {/* <Input name="author" placeholder="Author (required)" /> */}
              {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
              <FormBtn>Go</FormBtn>
            </form>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>My Saved Resources</h1>
            </Jumbotron>
            {this.state.resources.length ? (
              <List>
                {this.state.resources.map(resource => {
                  return (
                  <ListItem key={resource.permalink}>
                    <a href={"https://www.reddit.com" + resource.permalink}>
                      <strong>
                        {resource.title} {resource.link}
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
