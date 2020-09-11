import React from 'react';
import './css/Main.css';
import { Switch, Route, NavLink } from 'react-router-dom'

import Main from './pages/index'

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default App;
