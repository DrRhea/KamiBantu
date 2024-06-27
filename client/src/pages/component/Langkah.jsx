import React from 'react'

const Langkah = () => {
  return (
    <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl font-black rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            1
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center w-52">
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                Download touch from <span className="font-bold">Google Play</span> or the <span className="font-bold">App Store</span>
              </p>
            </div>
       
          </div>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg className="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl font-black rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            2
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center w-52">
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                Scan the QR code with <span className="font-bold">Touch</span>
              </p>
            </div>
        
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg className="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl font-black rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            3
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center w-52">
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                <span className="font-bold">That's it. you're all set!</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Langkah