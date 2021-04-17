import React from 'react';
import { items, users } from '../../data/MockData';
import { User } from '../../model/User';
import { ItemCard } from '../item/ItemCard';
import { UserCard } from '../userCard/UserCard';

import './pod-profile.scss';

export interface PodProfileProps {
  user: User;
}

export class PodProfile extends React.Component {
  render() {
    return (
      <div className='pod-profile'>
        <div className='pod-profile__body'>
          <h2 className='pod-profile__heading'>Outdoors Pod</h2>
          <div className='pod-profile__items'>
            <h2 className='pod-profile__heading'>Items</h2>
            <div className='pod-profile__item-grid'>
              {items.map((item) => (
                <ItemCard item={item} />
              ))}
            </div>
          </div>
          <div className='pod-profile__members'>
            <h2 className='pod-profile__heading'>Members</h2>
            {users.map((user) => (
              <UserCard user={user} />
            ))}
          </div>
        </div>
        <div className='button-container'>
          <button className='button-container__join-button'>Join</button>
        </div>
      </div>
    );
  }
}
