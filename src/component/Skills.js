import React from "react";

const Skills = () => {

  const imgSkills = [
    "https://i.ibb.co/ZgVqC8Z/icons8-javascript.gif",
    "https://cdn-icons-png.flaticon.com/512/889/889192.png?w=360",
    "https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e1f8bd1dc3c511ea5a28a56_icon-rect-tech.png",
    "https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png",
    "https://camo.githubusercontent.com/f85f882cb31eeaeee657ec955313015c30378e8f56c3dc2f06933b617a276cfd/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3734372f3739382f706e672d7472616e73706172656e742d6d7973716c2d6c6f676f2d6d7973716c2d64617461626173652d7765622d646576656c6f706d656e742d636f6d70757465722d736f6674776172652d646f6c7068696e2d6d6172696e652d6d616d6d616c2d616e696d616c732d746578742d7468756d626e61696c2e706e67",
    "https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png",
    "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
    "https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png",
    "https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle.png",
    "https://img.icons8.com/color/480/nodejs.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png",
    "https://cdn.iconscout.com/icon/free/png-256/trello-14-1175081.png",
    "https://getbootstrap.com/docs/4.5/assets/img/bootstrap-icons.png",
  ];


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
                  <a className="nav-link" href="projects">
                    My projects
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
          <div className="Rightl ll">
          {imgSkills.map((img,i)=>{
            return <div key={i}> <img src={img} className="iconHistory" /></div>
          })  }      </div>
        </div>
        <div className="full">
       </div>
      </div>
    </div>
  );
};

export default Skills;
