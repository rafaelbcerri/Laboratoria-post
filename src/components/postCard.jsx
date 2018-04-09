"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import CardWrapper from "../components/cardWrapper.jsx";
import FlatButton from "../components/flatButton.jsx";

class PostCard extends React.Component {
  constructor(props){
    super(props);

    this.alertBeforeDelete = this.alertBeforeDelete.bind(this);
    this.openEdition = this.openEdition.bind(this);
  }
  alertBeforeDelete() {
    var response = confirm("Tem certeza que você deseja deletar?");
    if (response == true) {
      this.props.onPostDelete(this.props.id);
    }
  }
  openEdition() {
    this.props.onPostEdit(this.props.id);
  }
  render() {
    return (
      <CardWrapper>
        <div>
          <p>{this.props.text}</p>
        </div>
        <div>
          <FlatButton text="Editar" classes="teal-text" onClick={this.openEdition}/>
          <FlatButton text="Excluir" classes="teal-text" onClick={this.alertBeforeDelete}/>
        </div>
      </CardWrapper>
    );
  }
}

PostCard.propTypes = {
  text: PropTypes.string.isRequired
};

module.exports = PostCard;
