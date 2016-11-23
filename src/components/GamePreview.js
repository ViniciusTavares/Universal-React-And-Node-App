'use strict'

import React from 'react';
import { Link } from 'react-router';

export default class GamePreview extends React.Component {
  render() {
    return (
      <Link to={`/game/${this.props.id}`}>
        <div className="game-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="nominations-count"><img src="/img/letter-icon.png"/> {this.props.nominations.length}</span>
        </div>
      </Link>
    );
  }
}
