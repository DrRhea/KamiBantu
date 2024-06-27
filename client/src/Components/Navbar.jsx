import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const navToggle = () => {
    setNav(!nav)
  }

  return (
    <>
    <nav className='flex justify-between max-md:px-4 px-8 py-4 text-[#5D5A88] border-b border-[#5D5A88] select-none'>
      <Link to='/' className='font-bold text-xl hover:text-[#373652] duration-150'>KamiBantu</Link>

      <ul className={`md:flex gap-8 font-medium ${nav ? 'max-md:flex max-md:flex-col max-md:absolute max-md:bg-white max-md:right-0 max-md:top-[61px] max-md:z-50 max-md:px-8 max-md:py-8' : 'max-md:hidden'}`}>
        <li className='hover:text-[#373652] duration-150'><Link to='/'>Beranda</Link></li>
        <li className='hover:text-[#373652] duration-150'><Link to='/lapor'>Lapor</Link></li>
        <li className='hover:text-[#373652] duration-150'><Link to='/lacak'>Lacak</Link></li>
        <li className='hover:text-[#373652] duration-150'><Link to='/artikel'>Artikel</Link></li>
        <li className='hover:text-[#373652] duration-150'><Link to='/tentang'>Tentang Kami</Link></li>
      </ul>

      <UilBars className={`cursor-pointer md:hidden ${nav && 'hidden'}`} onClick={navToggle} />
      <UilTimes className={`cursor-pointer md:hidden ${!nav && 'hidden'}`} onClick={navToggle}/>
    </nav>
    </>
  )
}

export default Navbar