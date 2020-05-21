import React, { Component, Fragment } from 'react';
//import './styles.css';
import 'antd/dist/antd.css';
import BaseRouter from './routes';
//import PaymentForm from './PaymentForm';

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
