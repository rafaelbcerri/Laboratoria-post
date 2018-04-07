"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    return (
      <div className="input-field">
        {
          this.props.icon
          ? <i className="material-icons prefix">{this.props.icon}</i>
          : null
        }
        <input id={this.props.id} type={this.props.type} className="validate" value={this.props.value}/>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired
};

module.exports = Input;
