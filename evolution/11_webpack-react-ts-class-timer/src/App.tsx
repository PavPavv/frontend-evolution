import React, { Component } from 'react';

import Title from './components/Title/Title';
import Timer from './components/Timer/Timer';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <section>
          <Title title='Test' />
          <Timer />
        </section>
      </div>
    );
  }
}
