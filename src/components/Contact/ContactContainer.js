"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="text-center">
                Contact
            </div>
        );
    }
}

Contact.propTypes = {

};

function mapStateToProps (state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
