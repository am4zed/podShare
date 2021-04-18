import React from 'react';
import { Link } from 'react-router-dom';
import { Pod } from '../../model/Pod';
import { User } from '../../model/User';
import { users, pods } from '../../data/database';

import './home.scss';
import { PodCard } from '../podCard/PodCard';

export class Home extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='home'>
          <section className='home__section'>
            <h2 className='home__heading'>Good evening, Sarah</h2>
            <p className='home__slogan'>Build a pod, share the planet</p>
          </section>
          <section className='home__needhave-grid'>
            <h2 className='home__heading'>Select if you want to search/offer</h2>
            <Link to='/search'>I need / Search</Link>
            <Link to='/offer'>I have / Share</Link>
          </section>
          <section className='home__category-grid'>
            <h2 className='home__heading'>Browse categories</h2>

            <Link to='/categories/sports'>Sports</Link>
            <Link to='/categories/cooking'>Cooking</Link>
            <Link to='/categories/diy'>DIY</Link>
            <Link to='/categories/kids'>Kids and Baby</Link>
          </section>
          <section className='home__pod-grid'>
            <h2 className='home__heading'>Browse Pods near you</h2>
            <PodCard pod={pods[0]} />
            <PodCard pod={pods[2]} />
            <PodCard pod={pods[4]} />
          </section>
        </div>
      </div>
    );
  }
}
