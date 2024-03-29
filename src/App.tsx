import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { AppState } from './AppState';
import { PodProfile } from './components/podProfile/podProfile';
import { SearchForm } from './components/search';
import { UserProfile } from './components/userProfile/UserProfile';
import { Home } from './components/home/Home';
import Login from './components/login/Login';

import './app.scss';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <BrowserRouter>
        <nav id='nav'>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            {/* This will ultimately be a link on user profile */}
            <li>
              <Link to='/pod-profile'>Pod Profile</Link>
            </li>
            <li>
              <Link to='/user-profile'>User Profile</Link>
            </li>
            <li className='login-button'>
              <Link to='/login'>Sign in</Link>
            </li>
          </ul>
        </nav>
        <div className='app-pages'>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/search'>
              <SearchForm />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/user-profile' name='user-profile' component={UserProfile}>
              <UserProfile />
            </Route>
            <Route path='/pod-profile'>
              <PodProfile />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
