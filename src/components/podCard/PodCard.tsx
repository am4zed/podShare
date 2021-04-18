import React from 'react';
import { Pod } from '../../model/Pod';

import './pod-card.scss';

export interface PodCardProps {
  pod: Pod;
}

export class PodCard extends React.Component<PodCardProps> {
  render() {
    const { pod } = this.props;
    return (
      <div className='pod-card'>
        <h2 className='pod-card__name'>{pod.name}</h2>
      </div>
    );
  }
}
