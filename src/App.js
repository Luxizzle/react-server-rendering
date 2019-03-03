import React from 'react';
import { Router } from '@reach/router';
import loadable from '@loadable/component';
import './App.css';

const NotFound = loadable(() => import('./routes/NotFound'));
const Home = loadable(() => import('./routes/Home'));

const App = () => (
  <Router>
    <NotFound default fallback={<div>loading...</div>} />
    <Home path="/" fallback={<div>loading...</div>} />
  </Router>
);

export default App;
