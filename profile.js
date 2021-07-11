import React, { Component } from 'react';
import ImgProfile from "../../images/GaryMcShane.jpg"

class profile extends Component {
    render() {
        return (
            <div>
              <div className="avatarImg">
                  <img className="circle responsive-img"
                  src={ImgProfile}
                  alt="Gary McShane"/>
                  </div>
                  <div className="card light-blue darken-4 z-depth-0 hide-one-large-only">
                      <div classNmae="card-content center social">
                          <h2 className="grey-tect text-lighten-3">
                              <strong>Gary McShane</strong>
                          </h2>
                          <h5 className="grey-text text-lighten-3"> Web Developer</h5>
                          <a href="https://www.linkedin.com/in/gary-mcshane-73079654/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                      </div>
                  </div>
                  <div className="card light-blue darken-4 z-depth-0">
                      <div className="card-content">
                          <h6 className="white-text">
                              <strong>#Profile</strong>
                          </h6>
                          <p className="grey-text text-lighten-3 pt">
                          I have successfully completed BSc (Hons) Computing Science. 
                          While I was completing my degree I had the opportunity to adopt and learn new skills as such work within a team and individually. 
                          I have good verbal and writing skills as well as strong organisational skill which can be applied to any given situation to achieve goals.
                          </p>
                      </div>
                  </div>
            </div>
        );
    }
}

