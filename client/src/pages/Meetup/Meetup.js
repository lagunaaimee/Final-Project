import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Meetup extends Component {
  // Setting our component's initial state
  state = {
    meetups: [],
    name: "",
    link: "",
    city: "",
    state: "",
    who: "",
  };

    // When the component mounts, load all meetups and save them to this.state.Meetup
  componentDidMount() {
    this.loadMeetup();
  }

  loadMeetup = () => {
    API.getMeetups()
      .then(res => this.setState({ meetups: res.data, name: "",link: "", city: "", state: "", who: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Meetup</h1>
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
              <h1>My Saved Meetup Groups</h1>
            </Jumbotron>
            {this.state.meetups.length ? (
              <List>
                {this.state.meetups.map(meetup => {
                   return (
                  <ListItem key={meetup._id}>
                    <a href={meetup.link}>
                      <strong>
                        {meetup.name} {meetup.city} {meetup.state} by {meetup.who}
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

export default Meetup;
