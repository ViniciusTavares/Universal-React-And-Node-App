'use strict'

import React from 'react';

const data = {
  'ps3': {
    'name': 'Playstation 3',
    'icon': 'ps3-flag.png',
  },
  'ps4': {
    'name': 'Playstation 4',
    'icon': 'ps4-flag.png',
  },
  'xbox360': {
    'name': 'Xbox 360',
    'icon': 'xbox-360-flag.png',
  },
  'xboxOne': {
    'name': 'Xbox One',
    'icon': 'xbox-one-flag.png',
  },
  'pc': {
    'name': 'PC',
    'icon': 'pc-flag.png',
  },
  'wiiU': {
    'name': 'Wii U',
    'icon': 'wii-u-flag.png',
  },
  'n3ds': {
    'name': '3DS',
    'icon': 'n3ds-flag.png',
  }
};

export default class Flag extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="flag">
        <img className="icon" title={name} src={`/img/${icon}`}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}
