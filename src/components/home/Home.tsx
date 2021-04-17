import React from 'react';
import { Link } from 'react-router-dom';

  export default function Home() {
    return <div>
            <section>Section 1
              <h2>Welcome SARAH</h2>
              <p>Share the planet, build a community</p>
              </section>
            <section>Section 2
              <h2>Select if you want to search/offer</h2>
              <div><Link to="/search">I need / Search</Link></div>
              <div><Link to="/offer">I have / Share</Link></div>
            </section>
            <section>Section 3
              <h2>Browse categories</h2>
              <div><Link to="/categories/sports">Sports</Link></div>
              <div><Link to="/categories/cooking">Cooking</Link></div>
              <div><Link to="/categories/diy">DIY</Link></div>
              <div><Link to="/categories/kids">Kids and Baby</Link></div>
            </section>
            <section>Section 4
              <h2>Browse Pods</h2>
            </section>
          </div>;
  }