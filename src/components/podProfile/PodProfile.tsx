import React from 'react';
import { User } from '../../model/User';

import './pod-profile.scss';

export interface PodProfileProps {
  user: User;
}

export class PodProfile extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='pod-profile'>
          <h2 className='pod-profile__heading'>Outdoors Pod</h2>
          <div className='pod-profile__items'>
            <h2 className='pod-profile__heading'>Items</h2>
            {/* TODO - create Item component that can also be used in UserProfile.tsx */}
          </div>
          <div className='pod-profile__members'>
            <h2 className='pod-profile__heading'>Members</h2>
            {/* TODO - create PodMemberCard component  */}
          </div>
        </div>
        <div className='button-container'>
          <button className='button-container__join-button'>Join</button>
          <button className='button-container__join-button2'>Join</button>
        </div>
      </div>
    );
  }
}
