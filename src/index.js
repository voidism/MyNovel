import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3GoodEnding from './Chapter3GoodEnd';
import Chapter3BadEnding from './Chapter3BadEnd';
import 'flexboxgrid/css/flexboxgrid.min.css';
import './index.css';

const routes = (
  <Route path="/" component={App}>
    <Route path="chapter1" components={Chapter1} />
    <Route path="chapter2" components={Chapter2} />
    <Route path="chapter3-ge" components={Chapter3GoodEnding} />
    <Route path="chapter3-be" components={Chapter3BadEnding} />
  </Route>
)

ReactDOM.render(
  <Router
    routes={routes}
    history={browserHistory}
  />,
  document.getElementById('root')
);
