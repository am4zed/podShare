import React from 'react';
import { UserCard } from '../userCard/UserCard';
import { users } from '../../data/MockData';
import './user-profile.scss';

export class UserProfile extends React.Component {
  render() {
    const user = users[0];
    return (
      <div className='main'>
        <div className='user-profile'>
          <UserCard user={user} />

          <div className='user-profile__items'>
            <h2 className='user-profile__heading'>{user.name}'s Items</h2>

            <div className='user-profile__itemlist'>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>

            {/* TODO - create Item component that can also be used in UserProfile.tsx */}
          </div>
          <div className='user-profile__pods'>
            <h2 className='user-profile__heading'>{user.name}'s Pods</h2>
            {/* TODO - create PodMemberCard component  */}
            <div className='user-profile__podlist'>
              <ul>
                <li>Pod 1</li>
                <li>Pod 2</li>
                <li>Pod 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
