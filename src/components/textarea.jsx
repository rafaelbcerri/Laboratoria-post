"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    return (
      <div className="input-field">
        <textarea id={this.props.id} className="materialize-textarea" value={this.props.value} onChange={this.props.onChange}></textarea>
        <label htmlFor={this.props.id} className={this.props.labelClasses}>{this.props.label}</label>
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

module.exports = Textarea;
