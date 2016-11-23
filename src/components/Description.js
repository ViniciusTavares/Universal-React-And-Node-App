'use strict'

import React from 'react';

export default class Description extends React.Component {
  render() {
    const description = this.props.description;
    return (
      <span>
        <span className="common-description"><strong>Description:</strong> {description}</span>
      </span>
    );
  }
}
