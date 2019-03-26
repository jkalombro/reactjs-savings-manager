import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

//components
import NavigationMenu from './containers/NavigationMenu';
import PrivateRoute from './components/Session/PrivateRoute';
import LoginContainer from './containers/Login';
import DashboardContainer from './containers/Dashboard';
import SavingsContainer from './containers/Savings';
import SettingsContainer from './containers/Settings';

class App extends Component {

  render() {
    const { store } = this.props;
    
    return (
      <Router>
        <NavigationMenu store={store} />
        <Switch>
          <Route exact path="/login" render={(props) => <LoginContainer {...props} session={store.Session} />} />
          <PrivateRoute exact path="/dashboard" component={DashboardContainer} session={store.Session} />
          <PrivateRoute exact path="/savings" component={SavingsContainer} session={store.Session} />
          <PrivateRoute exact path="/settings" component={SettingsContainer} session={store.Session} />
          <Redirect to='/login' />
        </Switch>
      </Router>
    );
  }
}

export default App;
