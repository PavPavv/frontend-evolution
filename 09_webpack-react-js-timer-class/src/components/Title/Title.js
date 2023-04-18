import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.css';

export class Title extends Component {
  render() {
    return <h1 className={styles.h1}>{this.props.title}</h1>;
  }
}

Title.defaultProps = {
  title: '',
};

Title.propTypes = {
  title: PropTypes.string,
};
