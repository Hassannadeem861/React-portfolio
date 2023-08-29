import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import image1 from './bg image.jpg'
import image2 from "./bg1 image.jpg";

function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-uppercase">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link rounded" href="#">
                Home
              </a>
              <a className="nav-link rounded" href="#">
                About
              </a>
              <a className="nav-link rounded" href="#">
                Services
              </a>
              <a className="nav-link rounded" href="#">
                Contact Us.
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* main section start */}

      <sectionc className="main py-5">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-6 py-5 mr-auto">
              <h3>
                <small>Hello, I'm </small>
                Hassan
              </h3>
              <h6 className="pt-3">PRO WEB-DEVELOPER</h6>
              <input type="button" value="My Work" className="bt1 mt-5 mr-3" />
              <input type="button" value="Hore Me" className="bt2 mt-5" />
            </div>
          </div>
        </div>
      </sectionc>

      {/* About Section */}

      <section className="about py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7">
              <img
                src={image2}
                alt="img"
                className="image-fluid"
                width={300}
                height={400}
              />
            </div>
            <div className="col-lg-8"></div>
            <h1>About Me</h1>
            <p className="style">MERN STACK DEVELOPER</p>
            <p>
              Passionate MERN Stack Developer with a knack for creating smooth
              web experiences.
              <br />
              Turning ideas into practical solutions with creative coding and an
              eye for good design.
              <br />
              Excited to use my MongoDB, Express, React, and Node.js
              <br />
              skills to build dynamic apps that make a lasting impact.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <div className="btnDiv">
        <input type="button" className="btn1" value="Download C.V" />
        <input type="button" className="btn2" value="Contact US" />
      </div>

      {/* <section className='services py-5 bg-light'>
  <div className='container py-5'>
    <h1>services.</h1>
    <div className='row pb-3'>
    <div className='col-lg-4 mb-3'>
    <div className='card text-center'>
   <div className='card-body'>
  <div className='circle'>
  <span><i className='bi bi-desktop'></i></span>
  </div>
  <h4 className='font-weight-bold pb-2'>Web Developer</h4>
  <text> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Cupiditate, facilis saepe
     Cupiditate, facilis saepe..  

 </text>
   </div>
    </div>
    </div>
    </div>
  </div>
  </section> */}
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
      <section className="contact py-5">
        <div className="container py-5">
          <h1 className="text-center">Contact Us</h1>
          <div className="row py-5">
            <div className="col-lg-10 mx-auto">
              <div className="row text-center">
                <div className="col-lg-4">
                  <div className="circle">
                    <span className="bi bi-linkedin"></span>
                  </div>
                  <h5> <a href="#">Linkedin</a></h5>
                  {/* <a href="#">Linkedin</a> */}
                </div>
                <div className="col-lg-4">
                  <div className="circle">
                  <span className="bi bi-github"></span>
                </div>
                  <h5> <a href="#">Github</a></h5>
                 {/* <a href="#">Github</a> */}
                </div>
                <div className="col-lg-4">
                  <div className="circle">
                  <span className="bi bi-what'sapp"></span>
                  </div>
                  <h5><a href="#">03164593747</a></h5>
                 </div>
              </div>
            </div>
          </div>

       
       {/* <div className="row">
        <div className="col-lg-9 ">
        <form id="form">
          <div className="form-row">
        <div className="col-lg-6">
        <input type="text" id="input1" className="form-control bg-light mb-3" placeholder="Name" required />
        </div>
        <div className="col-lg-6">
        <input type="text" id="input2" className="form-control bg-light mb-3" placeholder="Name" required />
        </div>
          </div>
          <div className="form-row">
         <div className="col-lg-12">
         <textarea name="" id="message" className="form-control bg-light" required ></textarea>
         </div>
          </div>
          <button className="btn3 my-4">Submit</button>
        </form>
        </div>
       </div> */}
       
     </div>
      </section>


      <footer id="footer" className="py-4 text-center">
      <text>msldmsdlsmdsld</text>
      </footer>











    </div>
  );
}

ReactDOM.render(
  <div>
    <Portfolio />
  </div>,
  document.querySelector("#root")
);
