import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
        <div className="row my-4">
          <div className="col-lg-8">
            <img className="img-fluid rounded" src="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            </img>
          </div>
          {/* <!-- /.col-lg-8 --> */}
          <div className="col-lg-4">
            <h1>What We're About</h1>
            <p>Details about our website.....</p>
            <a className="btn btn-primary btn-lg" href="/">About Us</a>
          </div>
          <div class="card text-white bg-secondary my-4 col-md-12 text-center">
            <div class="card-body">
              <p class="text-white m-0">Collaborators</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h2 class="card-title">Card One</h2>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">More Info</a>
                </div>
              </div>
            </div>
            {/* <!-- /.col-md-4 --> */}
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h2 class="card-title">Card Two</h2>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">More Info</a>
                </div>
              </div>
            </div>
            {/* <!-- /.col-md-4 --> */}
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h2 class="card-title">Card Three</h2>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">More Info</a>
                </div>
              </div>
            </div>
            {/* <!-- /.col-md-4 --> */}
          </div>
          {/* <Col size="md-12">
            <Jumbotron>
              <h1>About</h1>
            </Jumbotron> */}
          {/* <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Home</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Home On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : ( */}
          {/* <h3>No Results to Display</h3> */}
          {/* )} */}
          {/* </Col>
        </Row> */}
        </div>
      </div>
    );
  }
}

export default Home;
