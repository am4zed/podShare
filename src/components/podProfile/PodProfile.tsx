import React from 'react';
import { items, users } from '../../data/database';
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
            <div className='grid-container'>
              <div className='pod-profile__item-grid'>
                {items.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className='pod-profile__members'>
            <h2 className='pod-profile__heading'>Members</h2>
            <div className='grid-container'>
              <div className='pod-profile__member-grid'>
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='button-panel'>
          <div className='button_cont'>
            <a className='button-1' href='#' target='_blank' rel='nofollow'>
              <span>Join</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
