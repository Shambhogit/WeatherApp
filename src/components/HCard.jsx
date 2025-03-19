import React from 'react'

const HCard = () => {
  return (
    <div className=' flex flex-col gap-5 items-center h-full w-[120px] p-2'>
        <p className='text-white/50 font-mont text-sm font-semibold'>6:00 AM</p>
        <img src="./public/sun.png" alt="img" className='w-[50px] h-[50px]' />
        <h2 className='text-2xl font-mont text-white/70 font-bold'>31&#176;</h2>
    </div>
  )
}

export default HCard