import React from 'react';

import styles from './styles.module.scss';

type TTimeBoardProps = {
  time: string;
};

export const TimeBoard = ({ time }: TTimeBoardProps): JSX.Element => {
  return (
    <div className={styles.timer}>
      <div className={styles.timer__panel}>
        <div className={styles.timer_block}>
          <div className={styles.time}>{time}</div>
        </div>
      </div>
    </div>
  );
};

// export default TimeBoard;
