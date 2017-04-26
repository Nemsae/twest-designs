"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Bids extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="text-center">
                Bids
            </div>
        );
    }
}

Bids.propTypes = {

};

function mapStateToProps (state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bids);
