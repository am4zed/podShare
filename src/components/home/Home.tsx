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
      <div className='home'>
        <div className='home__body'>
          <section className='home__section'>
            <h2 className='home__heading'>Good evening.</h2>
            <p className='home__slogan'>Build a pod, share the planet</p>
          </section>
          <section className='home__section'>
            <h3 className='home__subheading'>What do you want to do?</h3>
            <div className='home__needhave-grid'>
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
          </section>
          <section className='home__section'>
            <h3 className='home__subheading'>Browse categories</h3>
            <div className='home__category-grid'>
              <Link className='button-1' to='/categories/sports'>
                <span>Sports</span>
              </Link>
              <Link className='button-1' to='/categories/cooking'>
                <span>Cooking</span>
              </Link>
              <Link className='button-1' to='/categories/diy'>
                <span>DIY</span>
              </Link>
              <Link className='button-1' to='/categories/kids'>
                <span>Kids and Baby</span>
              </Link>
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
