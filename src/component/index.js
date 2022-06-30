import "../component";
import { useState } from "react";

const Profile = () => {
  const [move, setMove] = useState(false);

  return (
    <div className="container2">
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
                  <a className="nav-link active" aria-current="page" href="#">
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
          onMouseMove={() => {
            setMove(true);
          }}
          className={move ? "rightsideHover" : "rightside"}
        >
          <h1 className="h1site ">
            <span className="blest" aria-hidden="true">
              H
            </span>
            <span className="blest" aria-hidden="true">
              I
            </span>
            <span className="blest" aria-hidden="true">
              ,
            </span>
            <br />
            <span className="blest" aria-hidden="true">
              I
            </span>
            <span className="blest" aria-hidden="true">
              '
            </span>
            <span className="blest" aria-hidden="true">
              m
            </span>
            <img
              className="smm"
              src="https://cdn-icons-png.flaticon.com/512/3570/3570071.png"
            />
            <span className="blest" aria-hidden="true">
              o
            </span>
            <span className="blest" aria-hidden="true">
              u
            </span>
            <span className="blest" aria-hidden="true">
              s
            </span>
            <span className="blest" aria-hidden="true">
              a
            </span>
            <span className="blest" aria-hidden="true">
              ,
            </span>
            <br />
            <span className="blest" aria-hidden="true">
              w
            </span>
            <span className="blest" aria-hidden="true">
              e
            </span>
            <span className="blest" aria-hidden="true">
              b
            </span>
            <span className="blest ll" aria-hidden="true">
              {" "}
            </span>

            <span className="blest" aria-hidden="true">
              d
            </span>
            <span className="blest" aria-hidden="true">
              e
            </span>
            <span className="blest" aria-hidden="true">
              v
            </span>
            <span className="blest" aria-hidden="true">
              e
            </span>
            <span className="blest" aria-hidden="true">
              l
            </span>
            <span className="blest" aria-hidden="true">
              o
            </span>
            <span className="blest" aria-hidden="true">
              b
            </span>
            <span className="blest" aria-hidden="true">
              e
            </span>
            <span className="blest" aria-hidden="true">
              r
            </span>
          </h1>
          <p className="text-start marginleft fs-5 fw-light text-muted">
            Full Stack Web Developer
          </p>

          <div className="sizo">
            <button type="button" className="btn btn-outline-success sizeing">
              Contact me!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/*  */
