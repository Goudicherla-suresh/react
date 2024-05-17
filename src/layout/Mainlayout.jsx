import React from 'react';
import Header from '../components/header'; // Corrected component name
import Home from '../pages/home';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className='Header' style={{ height: '50px', backgroundColor: 'beige' }}>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout; // Corrected component name
