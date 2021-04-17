import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { AppState } from './AppState';
import { PodProfile } from './components/podProfile/podProfile';
import Search from './components/search';
import Home from './components/Home';
import Login from './components/Login';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
        <PodProfile />
      </div>
    );
  }
}
