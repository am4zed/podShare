import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

  export default function Home() {
    return <div className='main'>
            <div className ='home'>
              <section className ='home__section'>Section 1
                <h2 className ='home__heading'>Welcome Sarah</h2>
                <p className = 'home__slogan'>Share the planet, build a community</p>
                </section>
              <section className ='home__section'>Section 2
                <h2 className ='home__heading'>Select if you want to search/offer</h2>
                <div><Link to="/search">I need / Search</Link></div>
                <div><Link to="/offer">I have / Share</Link></div>
              </section>
              <section className ='home__section'>Section 3
                <h2 className ='home__heading'>Browse categories</h2>
                <div className='home__categorydiv'><Link to="/categories/sports">Sports</Link></div>
                <div className='home__categorydiv'><Link to="/categories/cooking">Cooking</Link></div>
                <div className='home__categorydiv'><Link to="/categories/diy">DIY</Link></div>
                <div className='home__categorydiv'><Link to="/categories/kids">Kids and Baby</Link></div>
              </section>
              <section className ='home__section'>Section 4
                <h2 className ='home__heading'>Browse Pods</h2>
              </section>
            </div>
          </div>;
  }