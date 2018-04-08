"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import CardWrapper from "../components/cardWrapper.jsx";
import FlatButton from "../components/flatButton.jsx";

class PostCard extends React.Component {
  render() {
    return (
      <CardWrapper>
        <div>
          <p>{this.props.text}</p>
        </div>
        <div>
          <FlatButton text="Editar" classes="teal-text"/>
          <FlatButton text="Excluir" classes="teal-text"/>
        </div>
      </CardWrapper>
    );
  }
}

PostCard.propTypes = {
  text: PropTypes.string.isRequired
};

module.exports = PostCard;
