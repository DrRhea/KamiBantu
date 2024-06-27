import React from 'react'
import Notfound from '../assets/notfound.png'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center text-white bg-[#9c93cd] ">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <img 
            src={Notfound} 
            alt="404 Not Found" 
            className="object-contain w-full max-w-xl mx-auto"
          />
        </div>
        <h1 className="mb-2 text-4xl font-bold">404 Not Found</h1>
        <p className="mb-8 text-xl">Whoops! That page doesn't exist.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/lapor" className="text-white hover:underline">Lapor</a>
          <a href="/lacak" className="text-white hover:underline">Lacak</a>
          <a href="/tentang" className="text-white hover:underline">Tentang Kami</a>
        </div>
      </div>
    </div>
  )
}

export default NotFound