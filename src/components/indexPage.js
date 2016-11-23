"use require"

import React from 'react';
import GamePreview from './GamePreview';
import games from '../data/games';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="games-selector">
          {games.map(gameData => <GamePreview key={gameData.id} {...gameData} />)}
        </div>
      </div>
    );
  }
}
