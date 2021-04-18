import React from 'react';
import { User } from '../../model/User';

import './user-card.scss';

export interface UserCardProps {
  user: User;
}

export class UserCard extends React.Component<UserCardProps> {
  render() {
    const { user } = this.props;
    return (
      <div className='user-card'>
        <h2 className='user-card__name'>{user.name}</h2>
        <img className='user-card__image' src={user.image}></img>
        <ul className='user-card__bio'>
          <li>
            <span className='label'>Rating:</span> {this.renderRatingStars(user.rating)}
          </li>
          <li>
            <span className='label'>Location:</span> {user.location}
          </li>
          <li>
            <span className='label'>Bio: {user.bio}</span>{' '}
          </li>
        </ul>
      </div>
    );
  }

  private renderRatingStars(rating: number) {
    let ratingStars = [];

    for (let i = 0; i < rating; i++) {
      ratingStars.push('*');
    }

    return ratingStars.join(' ');
  }
}
