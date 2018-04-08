"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  componentDidMount() {
    var postCardSelector = document.getElementById(this.props.dropdownId);
    var instance = M.FormSelect.init(postCardSelector, {});
  }
  render() {
    return (
      <div className={"input-field " + this.props.classes}>
        <select id={this.props.dropdownId}>
          <OptionsList options={this.props.options} />
        </select>
        {
          this.props.label
          ? <label>{this.props.label}</label>
          : null
        }
      </div>
    );
  }
};

function OptionsList(props) {
  return props.options.map((option, index) =>
    <OptionItem key={index} value={option.value} text={option.text}/>
  );
}

function OptionItem(props) {
  return <option value={props.value}>{props.text}</option>;
};

Dropdown.propTypes = {
  dropdownId: PropTypes.string.isRequired,
  classes: PropTypes.string,
  options: PropTypes.array.isRequired
};

module.exports = Dropdown;
