import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Trending from '../component/Trending';
import Foot from '../component/Foot';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Trending />
      <Foot />
    </>
  );
}

export default Home;
