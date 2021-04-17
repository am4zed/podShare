import React from 'react';
import { User } from '../../model/User';

export interface PodProfileProps {
  user: User;
}

export class PodProfile extends React.Component {
  private selected = false;

  render() {
    return (
      <div className='main'>
        I am pod profile
        <button onClick={() => this.toggleSelected()}></button>
      </div>
    );
  }

  private toggleSelected() {
    this.selected = !this.selected;
  }
}
