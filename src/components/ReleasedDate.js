import React from 'react';

export default class ReleasedDate extends React.Component {
  render() {
    const date = this.props.date;
    return (
      <span>
        <span className="common-description"><strong>Released Date:</strong> {date}</span>
      </span>
    );
  }
}
