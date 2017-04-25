"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//  import classNames for showing active tab

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                </button>
                <a className="navbar-brand" href="javascript:void(0)">TWest Designs</a>
              </div>
              <div className="navbar-collapse collapse navbar-inverse-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="javascript:void(0)">Active</a></li>
                  <li><a href="javascript:void(0)">Link</a></li>
                  <li className="dropdown">
                    <a href="index.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
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
                  <li><a href="javascript:void(0)">Link</a></li>
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
