import React, { Component } from 'react';

import styles from './Title.module.css';

interface IProps {
  title?: string;
}

class Title extends Component<IProps> {
  render() {
    const { title = '' } = this.props;
    return <h1 className={styles.h1}>{title}</h1>;
  }
}

export default Title;
