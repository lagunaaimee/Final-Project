import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand" href="/">Our Specatular Title</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home
    {/* <span class="sr-only">(current)</span> */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nave-link" href="/api/Meetup">Meetup</a>
          </li>
          <li className="nav-item">
            <a className="nave-link" href="/api/Forum">Forum </a>
          </li>
          <li className="nav-item">
            <a className="nave-link" href="/api/Blog">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nave-link" href="/api/Resources">Resources</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
