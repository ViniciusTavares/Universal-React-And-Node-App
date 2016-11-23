'use strict'

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>. <br />
            This version has been adapted and uploaded on <a href="https://github.com/ViniciusTavares/TGA2015UniversalReactAndNodeApp" target="_blank">Github</a>.
          </p>
        </footer>
      </div>
    );
  }
}
