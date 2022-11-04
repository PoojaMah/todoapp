import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login ';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/" exact>
        <Login />
      </Route>
    </Router>
  );
}

export default App;
