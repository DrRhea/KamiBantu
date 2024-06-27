import React, { useState } from 'react';
import Footer from './Footer';
import Modal from './Modal';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div >
      <section className="flex flex-col items-center w-full px-2 py-8 mx-auto lg:my-8 bg-white lg:flex-row sm:px-8">
        <div className="items-center w-full px-2 lg:w-1/2 sm:px-8">
          <div className="lg:hidden">
            <div className="flex flex-row items-center justify-between">
              <div className="inline-flex items-center text-sm font-medium text-[#b9b2e0] sm:text-lg">
                Bantu menjaga keamanan di sekolah. Laporkan perundungan atau pelecehan dengan cepat dan mudah. Anda bisa melaporkan secara anonim. Suara Anda penting.
              </div>
              <h4 className="text-sm font-medium text-black sm:text-lg dark:text-gray-50">Live</h4>
            </div>
            <h1 className="py-4 text-3xl leading-snug sm:text-4xl xl:py-4 font-bold text-[#60588d] sm:mr-8 xl:leading-normal">
              Layanan Pengaduan dan Konsultasi Online KamiBantu
            </h1>
          </div>
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border border-white rounded-sm"
              src="https://www.youtube.com/embed/Aul35gjdFWM"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
        </div>
        <div className="items-center w-full lg:w-1/2 sm:px-8">
          <div className="hidden lg:block">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50">Live</h4>
            <h1 className="py-4 text-3xl leading-snug sm:text-4xl xl:py-4 font-bold tracking-tight text-[#60588d] sm:mr-8 xl:leading-normal">
              Layanan Pengaduan dan Konsultasi Online KamiBantu
            </h1>
            <div className="inline-flex items-center text-lg font-medium text-[#b9b2e0]">
              Bantu menjaga keamanan di sekolah. Laporkan perundungan atau pelecehan dengan cepat dan mudah. Anda bisa melaporkan secara anonim. Suara Anda penting.
            </div>
          </div>
          <div className="flex flex-col-reverse flex-none w-full mx-auto mt-10 space-y-3 space-y-reverse lg:w-auto lg:flex-row lg:items-start lg:space-y-0 lg:space-x-4 xl:mx-0">
            <div className="inline-block">
              <button
                className="flex items-center justify-center w-full sm:w-auto rounded-full bg-[#60588d] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#514a77]"
                onClick={openModal}
              >
                Lapor Segera!
              </button>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={modalIsOpen} onClose={closeModal} />
      
      <div className="max-w-screen-xl px-4 mx-auto mt-12 leading-relaxed lg:px-8"
>
  <div className="max-w-5xl mx-auto md:text-center">
    <h1 className="py-4 text-3xl leading-snug sm:text-4xl xl:py-4 font-bold tracking-tight text-[#60588d] sm:mr-8 xl:leading-normal">
      Informasi
    </h1>
    <p className="text-lg font-medium text-[#b9b2e0] max-w-3xl mx-auto leading-relaxed">
      Aplikasi ini didesain untuk memberikan solusi terhadap permasalahan perundungan dan pelecehan anak sekolah. Dengan menggunakan teknologi, kami berharap dapat memberikan bantuan yang cepat dan efektif kepada korban serta mencegah terjadinya kejadian serupa di masa mendatang.
    </p>
  </div>
</div>

<div className="container items-center px-4 py-8 m-auto mt-5">
  <div className="flex flex-wrap pb-3 mx-12 md:mx-24 lg:mx-0">
    <div className="w-full p-2 lg:w-1/4 md:w-1/2">
      <div
        className="flex flex-col items-center justify-center px-4 py-16 text-center duration-300 bg-white shadow-lg rounded-xl hover:bg-gray-50 hover:shadow-2xl group"
      >
        <span className="items-center px-4 py-4 mx-auto rounded-full bg-indigo-50 group-hover:bg-indigo-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="items-center w-8 h-8 m-auto text-indigo-500 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </span>
        <div className="mt-6 text-xl font-semibold text-gray-700">
          Project management
        </div>
        <div className="px-4 mt-3 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          quidem laudantium.
        </div>
      </div>
    </div>
    <div className="w-full p-2 lg:w-1/4 md:w-1/2">
      <div
        className="flex flex-col items-center justify-center px-4 py-16 text-center duration-300 bg-white shadow-lg rounded-xl hover:bg-gray-50 hover:shadow-2xl group"
      >
        <span className="items-center px-4 py-4 mx-auto rounded-full bg-pink-50 group-hover:bg-pink-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="items-center w-8 h-8 m-auto text-pink-500 group-hover:text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <div className="mt-6 text-xl font-semibold text-gray-700">
          Time tracking
        </div>
        <div className="px-4 mt-3 text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit commodi
          esse.
        </div>
      </div>
    </div>
    <div className="w-full p-2 lg:w-1/4 md:w-1/2">
      <div
        className="flex flex-col items-center justify-center px-4 py-16 text-center duration-300 bg-white shadow-lg rounded-xl hover:bg-gray-50 hover:shadow-2xl group"
      >
        <span className="items-center px-4 py-4 mx-auto rounded-full bg-purple-50 group-hover:bg-purple-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="items-center w-8 h-8 m-auto text-purple-500 group-hover:text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>
        <div className="mt-6 text-xl font-semibold text-gray-700">
          Resource planning
        </div>
        <div className="px-4 mt-3 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis
          debitis quo.
        </div>
      </div>
    </div>
    <div className="w-full p-2 lg:w-1/4 md:w-1/2">
      <div
        className="flex flex-col items-center justify-center px-4 py-16 text-center duration-300 bg-white shadow-lg rounded-xl hover:bg-gray-50 hover:shadow-2xl group"
      >
        <span className="items-center px-4 py-4 mx-auto rounded-full bg-green-50 group-hover:bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="items-center w-8 h-8 m-auto text-green-500 group-hover:text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <div className="mt-6 text-xl font-semibold text-gray-700">
          Invoicing
        </div>
        <div className="px-4 mt-3 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          placeat?
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>

    
  );
};

export default Home;
