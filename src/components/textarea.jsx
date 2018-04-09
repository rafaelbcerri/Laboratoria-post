"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function Textarea(props) {
  let classes = "materialize-textarea";
  if (props.value.length == 0) {
    classes = "materialize-textarea ";
    if (props.error) {
      classes += "invalid";
    }
  }
  return (
    <div className="input-field">
      <textarea id={props.id} className={classes} value={props.value} onChange={props.onChange}></textarea>
      <label htmlFor={props.id} className={props.labelClasses}>{props.label}</label>
      <ErrorMessage {...props}/>
    </div>
  );
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  labelClasses: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

function ErrorMessage(props) {
  if (props.error) {
    return <span className="helper-text" data-error="O campo de texto não pode ficar vazio"></span>;
  }
  return null;
}

module.exports = Textarea;
