import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class Meetup extends Component {
  // Setting our component's initial state
  state = {
    meetups: [],
    name: "",
    link: "",
    city: "",
    state: "",
    who: "",
    description: "",
  };

  // When the component mounts, load all meetups and save them to this.state.Meetup
  componentDidMount() {
    this.loadMeetup();
  }

  loadMeetup = () => {
    API.getMeetups()
      .then(res => this.setState({ meetups: res.data, name: "", link: "", city: "", state: "", who: "", description: "", })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>

        <Col size="sm-12">
          <img className="img-fluid rounded" src="https://secure.meetupstatic.com/photos/event/2/e/a/d/highres_450131949.jpeg" alt="">
          </img>
        </Col>
<br>
</br>
        <Row>
          <Col size="md-12">
            {this.state.meetups.length ? (
              <List>
                {this.state.meetups.map(meetup => {
                  return (
                    <ListItem key={meetup._id}>
                      <a href={meetup.link}>
                        <strong>
                          {meetup.name}
                        </strong>
                      </a>
                      <p>
                        {meetup.description}
                        {meetup.city} {meetup.state} by {meetup.who}
                      </p>
                      {/* <DeleteBtn /> */}
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
