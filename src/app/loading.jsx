import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='flex justify-center'>
       <Image  src='Spinner.svg' width={200} height={340} alt='loading...'/>
        </div>
  )
}

export default loading