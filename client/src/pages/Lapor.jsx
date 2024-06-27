import React, { useState } from 'react';
import Footer from './Footer';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const Lapor = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="px-6 lg:py-24 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-y-10 lg:gap-x-12">
          <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-[#60588d] sm:text-4xl lg:text-5xl">
              Layanan Pengaduan dan Konsultasi Online KamiBantu
            </h2>
            <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-[#9c93cd] lg:mx-0">
              Laporkan kasus perundungan dan pelecehan untuk mendapatkan konsultasi dan bantuan dari instansi terkait.
            </p>
            <div className="flex flex-col items-center justify-center mt-10 gap-y-4 sm:flex-row sm:gap-x-6">
              <button
                onClick={openModal}
                className="flex items-center justify-center w-full sm:w-auto rounded-full bg-[#60588d] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#514a77]"
              >
                Lapor Segera!
              </button>
              <Link
                to="/lacak"
                className="flex items-center justify-center w-full sm:w-auto rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-[#60588d] hover:bg-gray-100"
              >
                Periksa Status Pelaporan
              </Link>
            </div>
          </div>
          <div className="order-first w-full mt-10 lg:w-auto lg:flex-none lg:ml-12 lg:order-last lg:mt-0">
            <img
              src="https://i.pinimg.com/564x/c2/aa/45/c2aa4525f32340e1ee2ab944f540c1ca.jpg"
              alt="Gambar"
              className="aspect-[7/5] w-full max-w-none rounded-2xl bg-gray-50 object-cover lg:w-[37rem]"
            />
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onClose={closeModal} />
      <Footer />
    </div>
  );
};

export default Lapor;