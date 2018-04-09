"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import CardWrapper from "../components/cardWrapper.jsx";
import FlatButton from "../components/flatButton.jsx";
import Dropdown from "../components/dropdown.jsx";
import Textarea from "../components/textarea.jsx";

class EditCard extends React.Component {
  constructor(props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleTextChange(event) {
    const text = event.target.value;
    this.props.onChangeText(text, this.props.editCardId);
  }
  handleDropdownChange(event) {
    const value = event.target.value;
    this.props.onChangeDropdown(value, this.props.editCardId);
  }
  handleClick() {
    this.props.onClick(this.props.editCardId);
  }
  render() {
    return (
      <CardWrapper>
        <div>
          <Textarea id={this.props.editCardTextId} label="No que está pensando?" onChange={this.handleTextChange} value={this.props.textValue} labelClasses={this.props.labelClasses}/>
        </div>
        <div className="row mb-0">
          <Dropdown classes="w-100 d-ib m-0" dropdownId={this.props.editCardId} options={[{value: "public", text: "Público"}, {value: "friends", text: "Amigos"}]} onChange={this.handleDropdownChange} value={this.props.typeValue}/>
          <FlatButton text={this.props.buttonText} classes="teal-text" onClick={this.handleClick}/>
        </div>
      </CardWrapper>
    );
  }
}

EditCard.propTypes = {
  editCardId: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onChangeDropdown: PropTypes.func.isRequired
};

module.exports = EditCard;
