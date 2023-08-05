import React from 'react';
import Navbaritem from './Navbaritem';

function Navbar() {
  
  return (
    <div className='  flex justify-center dark:bg-amber-500 bg-amber-100 lg:text-lg p-4 '>
      <Navbaritem title="Trending" param="fetchTrending" />
      <Navbaritem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
