import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
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
            <h1>What We're About</h1>
            <p>The purpose of our site is to serve as a Hub for all aspects of the Dev Life.....</p>
            <a className="btn btn-primary btn-lg" href="aboutus">Our Mission</a>
          </div>
          <div className="card text-white bg-secondary my-4 col-md-12 text-center">

            <div className="card-body">
              <h2 className="text-white m-0">Our Team</h2>
</div>
              {/* Div displaying team members */}
              {/* <div className="row">
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
          </div> */}
          </div>
              {/* Div displaying page descriptions*/}

              <div className="row">
                <div className="col-md-4 mb-4 text-center">
                  <div className="card h-100">
                    <div className="card-body">
                      <a className="card-title" href="meetup">Meetup</a>
                      <p className="card-text">Find local meets ups in the Tucson Area to network and sharpen your coding skills!</p>
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
                      <p className="card-text">Read about current articles that your fellow colleagues are writing about!
</p>
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
      
  export default Home;
