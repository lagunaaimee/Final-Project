import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Forum from "./pages/Forum";
import Meetup from "./pages/Meetup";
import Resources from "./pages/Resources";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/meetup" component={Meetup} />
        <Route exact path="/resources" component={Resources} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
