"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function Input(props) {
  let classes = "validate";
  if (props.value.length == 0) {
    classes = "validate ";
    if (props.error) {
      classes += "invalid";
    }
  }
  return (
    <div className="input-field">
      <InputIcon {...props}/>
      <input id={props.id} type={props.type} className={classes} value={props.value} onChange={props.onChange}/>
      <label htmlFor={props.id}>{props.label}</label>
      <ErrorMessage {...props}/>
    </div>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

function InputIcon(props) {
  if (props.icon) {
    return <i className="material-icons prefix">{props.icon}</i>;
  }
  return null;
}

function ErrorMessage(props) {
  if (props.error) {
    return <span className="helper-text" data-error={props.errorText}></span>;
  }
  return null;
}

module.exports = Input;
