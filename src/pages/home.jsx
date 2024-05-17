import React from 'react';
import HomeCard from '../components/homecard';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'greenyellow', height: '85vh' }}>
      <h1 style={{ margin: '20px', marginTop: '0' }}>Home</h1>
      <div className="cardsContainer" style={{ padding: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
