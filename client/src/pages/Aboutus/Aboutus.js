import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../../components/Grid";
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
      <div className="Container fluid">
        {/* <Row> */}
        <div className="row align-items-center">
          <div className="col-lg-12">
            <img className="img-fluid rounded" src="https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            </img>
          </div>
          {/* <!-- /.col-lg-8 --> */}
          <div className="col-md-12 text-center">
            <h2>Purpose</h2>
            <p>
The purpose of this application is to create a centralized location for post-coding-boot-camp graduates. The application will accomplish this purpose by providing graduates with an online means of scheduling face-to-face meetups (in-person or virtually), which will provide a sense of community, opportunity for skills advancement, and portfolio development.
</p>
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
                <div class="col-lg-3 col-sm-3 text-center">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="https://avatars1.githubusercontent.com/u/38510342?s=460&v=4" alt=""></img>
                  <a href="https://github.com/garrettbrown1"><h2>Garrett Brown</h2></a>
                  <p>Project Role</p>
                </div>

                <div class="col-lg-3 col-sm-3 text-center">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="https://files.slack.com/files-pri/TB2803CP7-FFG3S81FG/20180214_185458.jpg" alt=""></img>
                  <a href="https://github.com/bluesally1031"><h2>Renee Reynolds</h2></a>
                  <p>Project Role</p>
                </div>

                <div class="col-lg-3 col-sm-3 text-center">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="https://files.slack.com/files-pri/TB2803CP7-FFDUXGQNL/20190115_195319.jpg" alt=""></img>
                  <a href="https://github.com/btshadeed"><h2>Bilal Shadeed</h2></a>
                  <p>Project Role</p>
                </div>

                <div class="col-lg-3 col-sm-3 text-center">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="https://avatars1.githubusercontent.com/u/40144892?s=460&v=4" alt=""></img>
                  <a href="https://github.com/lagunaaimee"><h2>Aimee Laguna</h2></a>
                  <p>Project Role</p>
                </div>
              </div>
            </div>
          </div>

          {/* Div displaying page descriptions*/}

          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <div className="card h-100">
                <div className="card-body">
                  <a className="card-title" href="meetup">Meetup</a>
                  <p className="card-text">Find local meets in the Tucson Area to network and sharpen your coding skills!</p>
                </div>
                <div className="card-footer">
                  <a href="/meetup" class="btn btn-primary">Join</a>
                </div>
              </div>
            </div>

            {/* <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <a className="card-title" href="api/Forum">Forum</a>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">More Info</a>
                </div>
              </div>
            </div> */}

            <div className="col-md-4 mb-4 text-center">
              <div className="card h-100">
                <div className="card-body">
                  <a className="card-title" href="/blog">Blog</a>
                  <p className="card-text">Read about current articles that your fellow colleagues are writing about!</p>
                </div>
                <div className="card-footer">
                  <a href="/blog" class="btn btn-primary">Post</a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4 text-center">
              <div class="card h-100">
                <div class="card-body">
                  <a className="card-title" href="/resources">Resources</a>
                  <p class="card-text">Here you'll find relevant resources about the coding community on Reddit!</p>
                </div>
                <div class="card-footer">
                  <a href="/resources" class="btn btn-primary">Follow</a>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default Aboutus;
