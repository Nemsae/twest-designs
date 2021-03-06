"use strict";
import React, { PropTypes } from "react";
import ScrollToTop from "react-scroll-up";
import {connect} from "react-redux";

import Navbar from './Navbar/NavbarContainer.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let loadingSpinner;
        if (this.props.loading) {
            loadingSpinner = <div className="loader"/>;
        }
        return (
            <div>
              <Navbar />
                {loadingSpinner}
                {this.props.children}
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.number
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.requestsInProgress
    };
}

export default connect(mapStateToProps)(App);
