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
  };
  //Resources.collection.insert(docs, options, callback) {}
  //for (i = 0; i < resources.length; i++) {
   // text += "The number is " + i + "<br>";
  //}
  componentDidMount() {
    this.loadResources();
  }

  loadResources = () => {
    API.getResources()
      .then(res => this.setState({ resources: res.data }))
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
            {this.state.resources.length ? (
              <List>
                {this.state.resources.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/resources/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
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

export default Resources;
