import React from 'react';
import { Link } from 'react-router';
import games from '../data/games';

export default class GamesMenu extends React.Component {
  render() {
    return (
      <nav className="games-menu">
        {games.map(gameMenu => {
          return <Link key={gameMenu.id} to={`/game/${gameMenu.id}`} activeClassName="active">
            {gameMenu.name}
          </Link>;
        })}
      </nav>
    );
  }
}
