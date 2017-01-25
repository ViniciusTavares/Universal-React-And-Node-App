import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import GamesMenu from './GamesMenu';
import Developer from './Developer';
import ReleasedDate from './ReleasedDate';
import Description from './Description';
import Winner from './Winner';
import games from '../data/games';

export default class GamesPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const game = games.filter((game) => game.id === id)[0];
    if (!game) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${game.cover})` };
    return (
      <div className="game-full">
        <GamesMenu/>
        <div className="game">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img className="game-box" src={`/img/${game.image}`}/>
              { !game.winner ?   <h2 className="name">{game.name}</h2>: <Winner name={game.name}/>}
          </div>
          <section className="description">
            <p><ReleasedDate date={game.releasedDate} /> </p>
            <p><Developer developer={game.developer} /></p>
            <p><Description description={game.description} /></p>
          </section>
          <section className="nominations">
            <p>It has been nomited for <strong>{game.nominations.length}</strong> categories:</p>
            <ul>{
         game.nominations.map((nomination, i) => <li> {nomination} </li>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
