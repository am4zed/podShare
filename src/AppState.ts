import { action, observable } from 'mobx';

export class AppState {
  @observable public count = 0;

  @action incCount() {
    this.count++;
  }
}
