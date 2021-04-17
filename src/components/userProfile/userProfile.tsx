import React from 'react';
import { User } from '../../model/User';
import { Pod } from '../../model/Pod';
import { Item } from '../../model/Item';

const username="Dave"

export interface UserProfileProps {
  user: User;
  pod: Pod;
  item: Item;
}

export default function UserProfile() {
    return ( 
    <div><h2>User Profile: {username}</h2>
    </div>)
    ;
  }
