import React from "react";

const Skills = () => {
  return (
    <div className="container3">
      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
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
            <div className="collapse navbar-collapse nevo" id="navbarNavDropdown">
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
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="bebot">
                <a href="https://www.linkedin.com/in/mousa-hussen/"><img alt="/" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="boha"/></a>
                <a href="https://github.com/MousaHussen"><img alt="/" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyukR8OJJEXFq3ByaCPrTYMDvzhHlpT6hCiA&usqp=CAU" className="boha"/></a>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="rightside"
          onMouseMove={() => {
            
          }}
        >
          <h1 className="h2site">
            <span className="blest ">S</span>
            <span className="blest">k</span>
            <span className="blest">i</span>
            <span className="blest">l</span>
            <span className="blest">l</span>
            <span className="blest">s</span>

            <span className="blest ll">&</span>
            <br />
            <span className="blest lll">E</span>
            <span className="blest">x</span>
            <span className="blest">p</span>
            <span className="blest">e</span>
            <span className="blest">r</span>
            <span className="blest">i</span>
            <span className="blest">n</span>
            <span className="blest">c</span>
            <span className="blest">e</span>
          </h1>
          <div className="toParagraph ">
            {" "}
            <p>
              Since beginning my journey as a Web developer ,I create successful
              responsive websites that are fast, easy to use, and built with
              best practices. The main area of my expertise is back-end
              development, front-end development, ReactJS, HTML, CSS, JS,
              building small and medium web apps, custom plugins, features,
              animations, and coding interactive layouts.
            </p>
          </div>
          <div className="ll">
            Visit my{" "}
            <a
              className="decoration"
              href="https://www.linkedin.com/in/mousa-hussen/"
            >
              LinkedIn
            </a>{" "}
            profile for more details or just{" "}
            <a className="decoration" href="">
              contact
            </a>{" "}
            me.
          </div>
        </div>
        <div className="lastr">
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

export default Skills;
