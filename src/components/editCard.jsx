"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import CardWrapper from "../components/cardWrapper.jsx";
import FlatButton from "../components/flatButton.jsx";
import Dropdown from "../components/dropdown.jsx";
import Textarea from "../components/textarea.jsx";

class EditCard extends React.Component {
  render() {
    return (
      <CardWrapper>
        <div>
          <Textarea id="textarea" label="No que está pensando?" value={this.props.textValue}/>
        </div>
        <div className="row mb-0">
          <Dropdown classes="w-100 d-ib m-0" dropdownId={this.props.editCardId} options={[{value: "friends", text: "Amigos"}, {value: "public", text: "Público"}]} />
          <FlatButton text="Publicar" classes="teal-text"/>
        </div>
      </CardWrapper>
    );
  }
}

EditCard.propTypes = {
  editCardId: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired
};

module.exports = EditCard;
