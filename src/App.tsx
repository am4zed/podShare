import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { PodProfile } from './components/podProfile/podProfile';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div>
        <button onClick={() => this.appState.incCount()}>Clicks: {this.appState.count}</button>
        <PodProfile />
      </div>
    );
  }
}
