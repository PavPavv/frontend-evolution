import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Title extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

Title.defaultProps = {
  title: '',
};

Title.propTypes = {
  title: PropTypes.string,
};
