import React from 'react';
import { Link } from 'react-router-dom';
import { Pod } from '../../model/Pod';
import { User } from '../../model/User';
import { users } from '../../data/database';

import './home.scss';

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
            <h2 className='home__heading'>Select if you want to search/offer</h2>
            <div className='home__needhavediv'>
              <Link to='/search'>I need / Search</Link>
            </div>
            <div className='home__needhavediv'>
              <Link to='/offer'>I have / Share</Link>
            </div>
          </section>
          <section className='home__section'>
            <h2 className='home__heading'>Browse categories</h2>
            <div className='home__categorydiv'>
              <Link to='/categories/sports'>Sports</Link>
            </div>
            <div className='home__categorydiv'>
              <Link to='/categories/cooking'>Cooking</Link>
            </div>
            <div className='home__categorydiv'>
              <Link to='/categories/diy'>DIY</Link>
            </div>
            <div className='home__categorydiv'>
              <Link to='/categories/kids'>Kids and Baby</Link>
            </div>
          </section>
          <section className='home__section'>
            <h2 className='home__heading'>Browse Pods near you</h2>
            <div className='home__categorydiv'>
              <Link to='/pods/munrobaggers'>Munrobaggers</Link>
            </div>
            <div className='home__categorydiv'>
              <Link to='/pods/cookingfiesta'>CookingFiesta</Link>
            </div>
            <div className='home__categorydiv'>
              <Link to='/pods/codeclan'>CodeClan</Link>
            </div>
            <div className='home__categorydiv'>
              <Link to='/pods/leithlinkshare'>Leith Links Share</Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
