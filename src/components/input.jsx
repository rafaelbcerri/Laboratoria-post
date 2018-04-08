"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    let classes = "validate";
    if (this.props.value.length == 0) {
      classes = "validate ";
      if (this.props.error) {
        classes += "invalid";
      }
    } 
    return (
      <div className="input-field">
        <InputIcon {...this.props}/>
        <input id={this.props.id} type={this.props.type} className={classes} value={this.props.value} onChange={this.props.onChange}/>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <ErrorMessage {...this.props}/>
      </div>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  onChange: PropTypes.func
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
