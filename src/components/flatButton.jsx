"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function FlatButton(props) {
  return (
    <a className={"btn-flat " + props.classes} onClick={props.onClick}>{props.text}</a>
  );
}

FlatButton.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func
};

module.exports = FlatButton;
