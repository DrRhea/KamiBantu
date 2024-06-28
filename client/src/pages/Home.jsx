import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Modal from './Modal';
import Langkah from './component/Langkah';
import Statistika from './component/Statistika';
import Testimoni from './component/Testimoni';
import Faq from './component/Faq';
import tamnel from '../assets/tamnel.png'

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
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
            {/* <iframe
              className="absolute inset-0 w-full h-full border border-white rounded-sm"
              src="https://www.youtube.com/embed/7i2pqbF0Oi0?autoplay=1&si=2IMYQokPJpQ1zlZ2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            <img
            className="absolute inset-0 w-full h-full border border-white rounded-sm"
            src={tamnel} alt="" />
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
      
      <div className="max-w-screen-xl px-4 mx-auto mt-12 leading-relaxed lg:px-8">
        <div className="max-w-5xl mx-auto md:text-center">
          <h1 className="py-4 text-3xl leading-snug sm:text-4xl xl:py-4 font-bold tracking-tight text-[#60588d] sm:mr-8 xl:leading-normal">
            Informasi
          </h1>
          <div className="inline-flex items-center text-lg font-medium text-[#b9b2e0]">
              Bantu menjaga keamanan di sekolah. Laporkan perundungan atau pelecehan dengan cepat dan mudah. Anda bisa melaporkan secara anonim. Suara Anda penting.
            </div>
        </div>
        <Langkah />
        <div className="max-w-screen-xl px-4 mx-auto mt-12 leading-relaxed lg:px-8">
        <div className="max-w-5xl mx-auto md:text-center">
          <h1 className="py-4 text-3xl leading-snug sm:text-4xl xl:py-4 font-bold tracking-tight text-[#60588d] sm:mr-8 xl:leading-normal">
            Statistika
          </h1>
          <div className="inline-flex items-center text-lg font-medium text-[#b9b2e0]">
              Bantu menjaga keamanan di sekolah. Laporkan perundungan atau pelecehan dengan cepat dan mudah. Anda bisa melaporkan secara anonim. Suara Anda penting.
            </div>
        </div>
        </div>
        <Statistika />

        <Testimoni />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
