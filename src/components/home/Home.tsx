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
          <section className='home__section'>
            <h3 className='home__subheading'>What do you want to do?</h3>
            <div className='home__needhave-grid'>
              <Link to='/search'>I need / Search</Link>
              <Link to='/offer'>I have / Share</Link>
            </div>
          </section>
          <section className='home__section'>
            <h3 className='home__subheading'>Browse categories</h3>
            <div className='home__category-grid'>
              <Link to='/categories/sports'>Sports</Link>
              <Link to='/categories/cooking'>Cooking</Link>
              <Link to='/categories/diy'>DIY</Link>
              <Link to='/categories/kids'>Kids and Baby</Link>
            </div>
          </section>
          <section className='home__section'>
            <h3 className='home__subheading'>Browse Pods near you</h3>
            <div className='home__pod-grid'>
              <PodCard pod={pods[0]} />
              <PodCard pod={pods[2]} />
              <PodCard pod={pods[4]} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
