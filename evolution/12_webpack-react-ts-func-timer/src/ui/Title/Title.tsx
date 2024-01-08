import React from 'react';

import styles from './Title.module.css';

type Props = {
  title?: string;
};

export const Title = ({ title = '' }: Props): JSX.Element => {
  return <h1 className={styles.h1}>{title}</h1>;
};
