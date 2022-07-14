import React from "react";

const Projects = () => {
  

  return (
    <div className="container3">
      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
         
        </div>
      </nav>
      <div className="middle">
        <nav className="navbar2 navbar-expand-lg ">
          <div className="container-fluid allen">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nevo"
              id="navbarNavDropdown"
            >
              <img
                className="designimgbar"
                src="https://i.ibb.co/pQ3PbnJ/1521811564639.jpg"
              />
              <ul className="navbar2-nav coloumnleft">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="skills">
                    My Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects">
                    My projects
                  </a>
                </li>
              </ul>
              <div className="bebot">
                <a href="https://www.linkedin.com/in/mousa-hussen/">
                  <img
                    alt="/"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                    className="boha"
                  />
                </a>
                <a href="https://github.com/MousaHussen">
                  <img
                    alt="/"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyukR8OJJEXFq3ByaCPrTYMDvzhHlpT6hCiA&usqp=CAU"
                    className="boha"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="lastr">
          []
          <div className="card  lll">
            <div className="card-body">
              <h5 className="card-title">Insta Clone</h5>

              <p className="card-text">
                A web app specialized to connect your daily photos, stories, and
                videos with your friends.
              </p>
              <p className="card-text">
                Tech Stack : Trello, React, Redux, Socket io, Express.js, MySQL
              </p>
              <a
                href="https://github.com/ERROR-404-MERAKI/MERAKI_Academy_Project_5"
                className="card-link decoration"
              >
                Project Link
              </a>
            </div>
          </div>
          <div className="card lll">
            <div className="card-body">
              <h5 className="card-title">TWITTER APP</h5>

              <p className="card-text">
                A web app specialized to know what’s happening and what people
                are talking about right now.
              </p>
              <p className="card-text">
                Tech Stack : Trello, React, Context Hooks, Express.js, MongoDB
              </p>
              <a
                href="https://github.com/C5-MousaHussen/MERAKI_Academy_Project_4"
                className="card-link decoration"
              >
                Project Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
