import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, FormBtn } from "../../components/Form";

class Resources extends Component {
  state = {
    resources: [],
    title: "",
    link: "",
    thumbnail: "",
  };

  componentDidMount() {
    this.loadResources();
  }

  loadResources = () => {
    API.getResources()
      .then(res => this.setState({ resources: res.data, title: "", link: "", thumbnail: "", }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
      {/* Image displayed at top of page */}
        <Col size="sm-12">
          <img className="img-fluid rounded" src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1089438%2Fpexels-photo-1089438.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26fit%3Dcrop%26h%3D627%26w%3D1200" alt="">
          </img>
        </Col>
        <br></br>

        <Row>

          <Col size="col-md-12">
            <div className="col-md-8 text-center">
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
                        <p>{resource.selftext}</p>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resources;
