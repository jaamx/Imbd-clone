import React from 'react';
import Menuitems from './Menuitems';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      
      <div className='flex'>
        
        <Menuitems title='HOME' address='/' Icons ={ AiFillHome } />
        <Menuitems title='ABOUT' address='/About' Icons ={ BsFillInfoCircleFill } />
      </div>
      <div className='flex items-center space-x-5'>
      
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr1'>
              IMDB
            </span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
