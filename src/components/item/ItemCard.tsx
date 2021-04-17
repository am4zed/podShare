import React from 'react';
import { Item } from '../../model/Item';

import './item-card.scss';

export interface ItemCardProps {
  item: Item;
}

export class ItemCard extends React.Component<ItemCardProps> {
  render() {
    const { item } = this.props;
    return (
      <div className='item-card'>
        <h2 className='item-card__name'>{item.name}</h2>
        <img className='item-card__image' src={item.image}></img>
        <ul className='item-card__details'>
          <li>
            <span className='label'>Description:</span> <p>{item.description}</p>
          </li>
          <li>
            <span className='label'>Category:</span> {item.type}
          </li>
          <li>
            <span className='label'>Available:</span> {item.available ? 'yes' : 'no'}
          </li>
        </ul>
      </div>
    );
  }
}
