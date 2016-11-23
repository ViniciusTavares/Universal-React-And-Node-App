'use strict'

import React from 'react';

export default class Winner extends React.Component {
  render() {
    return (
      <div className="winner-container">
      <h2>{this.props.name}</h2>
      <img className="winner-logo" src="/img/winner.png"/>
      </div>
    );
  }
}
