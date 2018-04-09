"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    let classes = "materialize-textarea";
    if (this.props.value.length == 0) {
      classes = "materialize-textarea ";
      if (this.props.error) {
        classes += "invalid";
      }
    }
    return (
      <div className="input-field">
        <textarea id={this.props.id} className={classes} value={this.props.value} onChange={this.props.onChange}></textarea>
        <label htmlFor={this.props.id} className={this.props.labelClasses}>{this.props.label}</label>
        <ErrorMessage {...this.props}/>
      </div>
    );
  }
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  labelClasses: PropTypes.string
};

function ErrorMessage(props) {
  if (props.error) {
    return <span className="helper-text" data-error="O campo de texto não pode ficar vazio"></span>;
  }
  return null;
}

module.exports = Textarea;
