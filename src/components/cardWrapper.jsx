"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class CardWrapper extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            {this.props.title}
          </div>
          {this.props.children[0]}
        </div>
        <div className="card-action">
          {this.props.children[1]}
        </div>
      </div>
    );
  }
}

CardWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired
};

module.exports = CardWrapper;
