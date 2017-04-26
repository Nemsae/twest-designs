"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="text-center">
                Home
            </div>
        );
    }
}

Home.propTypes = {

};

function mapStateToProps (state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
