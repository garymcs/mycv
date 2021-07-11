import React, { Component } from 'react';

class skills extends Component {
    render() {
        return (
            <div>
              <div className="card light-blue darken-4 z depth-0">
                  <div className="card-content">
                      <h6 className="white=text">
                          <strong>#PROFESSIONAL SKILLS</strong>
                      </h6>
                      <hr/>
                      <div class className="row pt">
                          <div className="col m6 s12">
                              <p className="grey-text text-lighten=3">HTML</p>
                              <div className="progress white">
                                  <div className="determinate grey" style={{width: '89%'}}></div>
                              </div>
                          </div>
                      </div>
                      <div className="row pt">
                          <div className="col m6 s12">
                              <p className="grey text text-ligthen-3">CSS</p>
                              <div className="progress white">
                                  <div className="determinate grey" style={{width:'100%'}}></div>
                          </div>
                      </div>
                  </div>
                  <div class className="row pt">
                          <div className="col m6 s12">
                              <p className="grey-text text-lighten-3">PHP</p>
                              <div className="progress white">
                                  <div className="determinate grey" style={{width: '89%'}}></div>
                              </div>
                          </div>
                      </div>
                      <div className="row pt">
                          <div className="col m6 s12">
                              <p className="grey text text-ligthen-3">MySQL</p>
                              <div className="progress white">
                                  <div className="determinate grey" style={{width:'100%'}}></div>
                          </div>
                      </div>
                  </div>

                </div>  
            </div>
        </div>
        );
    }
}

