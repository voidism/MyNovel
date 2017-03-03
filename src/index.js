import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3GoodEnding from './Chapter3GoodEnd';
import Chapter3BadEnding from './Chapter3BadEnd';
import 'flexboxgrid/css/flexboxgrid.min.css';
import './index.css';

const routes = (
  <Route path="/">
    <IndexRoute component={App} />
    <Route path="chapter1" component={Chapter1} />
    <Route path="chapter2" component={Chapter2} />
    <Route path="chapter3-ge" component={Chapter3GoodEnding} />
    <Route path="chapter3-be" component={Chapter3BadEnding} />
    <Route path="*" component={App} />
  </Route>
)

ReactDOM.render(
  <Router
    routes={routes}
    history={browserHistory}
  />,
  document.getElementById('root')
);
