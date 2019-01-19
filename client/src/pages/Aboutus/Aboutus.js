import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Aboutus extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadHome();
  }

  loadHome = () => {
    API.getHome()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
      {/* Image displayed at top of page */}
        <Col size="sm-12">
          <img className="img-fluid rounded" src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1068523%2Fpexels-photo-1068523.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26fit%3Dcrop%26h%3D627%26w%3D1200" alt="">
          </img>

          <br></br>
          {/* <Row> */}
          <Row>
            {/* <!-- /.col-lg-8 --> */}
            <div className="col-md-12 text-center">

              <h2>Value</h2>
              <p>
                This application is intended for students who are in a transition phase between boot camp graduation to precuring their position as a web developer. Therefore, the value of this application is to bridge the gap between the rigors of boot camp and the realities of the professional world, most specifically addressing the areas of confidence that many graduates retain even after a thorough professional boot camp experience: having a strong professional network, building an impressive and professional portfolio of work, increasing programming language knowledge, and improving upon computer science understanding.
  
                Through the community building offered, this app helps to build skills and contribute to holistic professional development.
              </p>
              <h2>General Overview</h2>
              <p>
                The application will utilize the Meetup API to find already established groups in the area. Further, resource websites that promote skill development for full-stack devs will be utilized by scraping articles and centralizing them within the app’s resources tab. Finally, the app will utilize authentication. The app will have four main sections: Meetups, forums, blogs, and resources. The design is loosely based on The Grad Cafe, which provides potential graduate students with resources during their transition to graduate school.
            </p>
            </div>
            <div className="card text-white bg-secondary my-4 col-md-12 text-center">

              <div className="card-body">
                <h2 className="text-white m-0">Our Team</h2>

                {/* Div displaying team members */}
                <div className="row">
                  <div className="col-lg-3 col-sm-3 text-center">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="https://avatars1.githubusercontent.com/u/38510342?s=460&v=4" alt=""></img>
                    <a href="https://github.com/garrettbrown1"><h2>Garrett Brown</h2></a>
                    <p>Team Member</p>
                  </div>

                  <div className="col-lg-3 col-sm-3 text-center">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="https://files.slack.com/files-pri/TB2803CP7-FFG3S81FG/20180214_185458.jpg" alt=""></img>
                    <a href="https://github.com/bluesally1031"><h2>Renee Reynolds</h2></a>
                    <p>Team Member</p>
                  </div>

                  <div className="col-lg-3 col-sm-3 text-center">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="https://files.slack.com/files-pri/TB2803CP7-FFDUXGQNL/20190115_195319.jpg" alt=""></img>
                    <a href="https://github.com/btshadeed"><h2>Bilal Shadeed</h2></a>
                    <p>Team Member</p>
                  </div>

                  <div className="col-lg-3 col-sm-3 text-center">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="https://avatars1.githubusercontent.com/u/40144892?s=460&v=4" alt=""></img>
                    <a href="https://github.com/lagunaaimee"><h2>Aimee Laguna</h2></a>
                    <p>Team Member</p>
                  </div>

                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Aboutus;
