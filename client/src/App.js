import React from "react";
import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import Forum from "./pages/Forum";
// import Meetup from "./pages/Meetup";
// import Resources from "./pages/Resources";
import Nav from "./components/Nav";

const App = () => (
  <div>
    <Nav />
    <Home />
    {/* <Blog />
    <Forum />
    <Meetup />
    <Resources /> */}
  </div>
);

export default App;
