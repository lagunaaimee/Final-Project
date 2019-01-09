import React from "react";
import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import Forum from "./pages/Forum";
import Meetup from "./pages/Meetup";
import Resources from "./pages/Resources";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Nav />
    <Home />
    <Meetup />
    <Resources />
    {/* <Blog />
    <Forum />
    
     */}
    <Footer />
  </div>
);

export default App;
