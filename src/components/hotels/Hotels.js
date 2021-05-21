import React from 'react';
import Footer from '../layout/Footer';
import HotelHorizontalCard from './HotelHorizontalCard';

function Hotels() {
  return (
    <>
      <div className="w-full mt-14 mb-6 lg:my-20 lg:mb-6">
        <h1 className="text-4xl text-blue-900 leading-tight">Our hotels</h1>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <HotelHorizontalCard />
      </div>

      <Footer />
    </>
  );
}

export default Hotels;
