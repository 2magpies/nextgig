import React from 'react';
import AuditionList from '../auditions/AuditionList';
import '../../App.css';


export const Home = () => (
  <div className="home">
    <h2>Welcome</h2>
    <p>Browse the NextGig bulletin board to find open auditions in your area. </p>
    

    <AuditionList />
  </div>
);
