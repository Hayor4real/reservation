import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='Affordable and Beautiful Rooms'
          subtitle='deluxe rooms starting at €300'
        >
          <Link to='/rooms' className='btn-primary'>
            Our reservation rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
