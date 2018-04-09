"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function CardWrapper(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          {props.title}
        </div>
        {props.children[0]}
      </div>
      <div className="card-action">
        {props.children[1]}
      </div>
    </div>
  );
};

CardWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired
};

module.exports = CardWrapper;
