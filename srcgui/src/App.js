import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';

import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <BaseRouter />
        </Fragment>
      </div>
    );
  }
}

export default App;
