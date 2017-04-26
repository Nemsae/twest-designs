"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { browserHistory } from "react-router";

//  import classNames for showing active tab

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          active: 'home',
        };
    }

    handleClick(name, path) {
      // console.log('Sanity:');
      console.log('name of handleClick: ', name);
      this.setState({ active: name });
      browserHistory.push(path);
    }

    render() {
        return (
          <div className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                {/* NAVBAR HAMBURGER HERE */}
                {/* NAVBAR HAMBURGER HERE */}
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                </button>
                {/* NAVBAR HAMBURGER HERE */}
                {/* NAVBAR HAMBURGER HERE */}
                <a className="navbar-brand" onClick={() => { this.handleClick('home', '/'); }}>TWest Designs</a>
              </div>
              <div className="navbar-collapse collapse navbar-inverse-collapse">
                <ul className="nav navbar-nav">
                  <li className="active" onClick={() => { this.handleClick('about', '/about'); }}><a href="javascript:void(0)">About</a></li>
                  <li onClick={() => { this.handleClick('projects', '/projects'); }}><a href="javascript:void(0)">Projects</a></li>
                  <li className="dropdown">
                    <a data-target="#" className="dropdown-toggle" data-toggle="dropdown">Services
                      <b className="caret"/></a>
                    <ul className="dropdown-menu">
                      <li><a href="javascript:void(0)">Action</a></li>
                      <li><a href="javascript:void(0)">Another action</a></li>
                      <li><a href="javascript:void(0)">Something else here</a></li>
                      <li className="divider"/>
                      <li className="dropdown-header">Dropdown header</li>
                      <li><a href="javascript:void(0)">Separated link</a></li>
                      <li><a href="javascript:void(0)">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                {/* <form className="navbar-form navbar-left">
                  <div className="form-group">
                    <input type="text" className="form-control col-sm-8" placeholder="Search" />
                  </div>
                </form> */}
                <ul className="nav navbar-nav navbar-right">
                  <li onClick={() => { this.handleClick('contact', '/contact'); }}><a href="javascript:void(0)">Contact</a></li>
                  <li className="dropdown">
                    <a href="index.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                      <b className="caret"/></a>
                    <ul className="dropdown-menu">
                      <li><a href="javascript:void(0)">Action</a></li>
                      <li><a href="javascript:void(0)">Another action</a></li>
                      <li><a href="javascript:void(0)">Something else here</a></li>
                      <li className="divider"/>
                      <li><a href="javascript:void(0)">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
</div>
        );
    }
}

NavBar.propTypes = {

};

function mapStateToProps (state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
