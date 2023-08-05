import React from 'react';
import Link from 'next/link';

function Menuitems({ title, address, Icons }) {
  return (
    <div>
      <Link legacyBehavior href={address} >
        <a className='mx-4 lg:mx-6 hover:text-amber-500 '>
          <Icons className='text-2xl md:hidden sm:inline mx-4' />
          <p className='hidden md:inline my-2 text-sm'>{title}</p>
        </a>
      </Link>
    </div>
  );
}

export default Menuitems;
