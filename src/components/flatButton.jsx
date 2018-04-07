"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class FlatButton extends React.Component {
  render() {
    return (
      <a className={"btn-flat " + this.props.classes}>{this.props.text}</a>
    );
  }
}

FlatButton.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string
};

module.exports = FlatButton;
