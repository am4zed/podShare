import React from 'react';
import { UserCard } from '../userCard/UserCard';

import { items, pods, users } from '../../data/database';
import { PodCard } from '../podCard/PodCard';
import { ItemCard } from '../item/ItemCard';
import { Link } from 'react-router-dom';

import './user-profile.scss';

export class UserProfile extends React.Component {
  render() {
    const user = users[0];
    return (
      <div className='user-profile'>
        <div className='user-profile__body'>
          <div className='user-profile__hero'>
            <div className='grid-container'>
              <UserCard user={user} />
            </div>
            <div className='button-panel'>
              <div className='button_cont'>
                <Link className='button-1' to='/search'>
                  <span>I need / Search</span>
                </Link>
              </div>
              <div className='button_cont'>
                <Link className='button-1' to='/search'>
                  <span>I have / Share</span>
                </Link>
              </div>
            </div>
          </div>

          <div className='user-profile__items'>
            <h2 className='user-profile__heading'>{user.name}'s Items</h2>
            <div className='grid-container'>
              <div className='user-profile__item-grid'>
                {items.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className='user-profile__pods'>
            <h2 className='user-profile__heading'>{user.name}'s Pods</h2>
            <div className='grid-container'>
              <div className='user-profile__pod-grid'>
                <PodCard pod={pods[0]} />
                <PodCard pod={pods[2]} />
                <PodCard pod={pods[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
