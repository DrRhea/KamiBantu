import React, { useState } from 'react';
import Footer from './Footer';

const Lacak = () => {
  const [trackingCode, setTrackingCode] = useState('');

  const steps = [
    { id: 1, status: 'completed', text: 'Laporan Sedang diverifikasi' },
    { id: 2, status: 'in-progress', text: 'Laporan diterima' },
    { id: 3, status: 'pending', text: 'Investigasi dan Koordinasi' },
    { id: 4, status: 'pending', text: 'Intervensi Awal dan Proses Hukum' },
    { id: 5, status: 'pending', text: 'Rehabilitasi dan Penutupan Kasus' },
  ];

  return (
    <div className="font-sans">
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#a398d8]">
        <header className="mb-10 text-center text-white">
          <h1 className="mb-8 text-4xl font-bold sm:text-5xl">Status Pengaduan</h1>
          <p className="max-w-2xl text-xl">
            Silakan masukan kode status.
          </p>
        </header>
        <div className="w-full max-w-md mb-8">
          <div className="flex items-center overflow-hidden bg-white rounded-full shadow-lg">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="MOV7657"
              className="flex-grow px-6 py-4 text-lg focus:outline-none"
            />
            <button className="bg-[#483D8B] text-white px-8 py-4 text-lg font-semibold hover:bg-[#382D7B] transition duration-300">
              Cek
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full max-w-3xl p-8 bg-white shadow-2xl rounded-2xl">
          <div className="w-max">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center mb-8 last:mb-0">
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step.status === 'completed'
                        ? 'bg-green-500'
                        : step.status === 'in-progress'
                        ? 'bg-blue-500'
                        : 'bg-gray-300'
                    } text-white text-xl font-bold shadow-md`}
                  >
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-300 left-1/2 top-12"></div>
                  )}
                </div>
                <div className="ml-6">
                  <div
                    className={`text-lg font-semibold mb-1 ${
                      step.status === 'completed'
                        ? 'text-green-600'
                        : step.status === 'in-progress'
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {step.status === 'completed' && 'Completed'}
                    {step.status === 'in-progress' && 'In progress'}
                    {step.status === 'pending' && 'Pending'}
                  </div>
                  <div className="text-base text-gray-700">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lacak;