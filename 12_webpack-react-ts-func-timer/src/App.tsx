import React from 'react';

import { Timer } from './ui/Timer/Timer';
import { Title } from './ui/Title/Title';

export const App = (): JSX.Element => {
  return (
    <div className='container'>
      <Title title='Test' />
      <Timer />
    </div>
  );
};
