import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " aria-current="page" href="#page-resume">Home</a>
        <a className="nav-link" href="#page-resume">Resume</a>
        <a className="nav-link" href="#page-skills">Skills</a>
        <a className="nav-link" href="#page-portfolio">Portofolio</a>
        <a className="nav-link" href="#page-blog">Blog</a>
        <a className="nav-link" href="#page-contact">Contact</a>
      </div>
    </div>
  </div>
</nav>

            </div>
        )
    }
}
