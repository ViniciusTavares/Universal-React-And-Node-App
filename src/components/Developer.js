import React from 'react';

export default class Developer extends React.Component {
  render() {
    const developerName = this.props.developer;
    return (
      <span>
        <span className="common-description"><strong>Developer:</strong> {developerName}</span>
      </span>
    );
  }
}
