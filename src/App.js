import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import ProtectedRoute from './components/route/ProtectedRoute';
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
)

export default App;
