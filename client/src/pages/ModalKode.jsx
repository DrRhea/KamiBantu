import React, { useState } from 'react';
import emot from '../assets/emot.png';
import silang from '../assets/silang.png';
import { Link } from 'react-router-dom';
import { UilCheck } from '@iconscout/react-unicons';

const ModalKode = ({ isOpen, onClose, reportCode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reportCode).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => {
        alert('Failed to copy code.');
      }
    );
  };

  if (!isOpen) return null;

  const handleCekClick = () => {
    console.log('Cek klik');
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white shadow-lg rounded-2xl w-80">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
        >
          <img src={silang} alt="Close" className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center h-24 rounded-full w-26">
              <img src={emot} alt="Heart" className="w-40 h-40" />
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-purple-700">Terima Kasih!</h2>
          <p className="mb-4 text-gray-600">Laporan Terkirim</p>
          <div className="px-4 py-2 mb-4 font-mono text-gray-700 bg-gray-100 rounded-lg flex items-center">
            <span>{reportCode}</span>
            <button
              onClick={copyToClipboard}
              className={`ml-4 px-2 py-1 text-white rounded flex items-center ${
                copied ? 'bg-green-500' : 'hover:bg-[#373250] bg-[#60588d]'
              }`}
            >
              {copied ? <UilCheck /> : 'Copy'}
            </button>
          </div>
          <Link
            // onClick={handleCekClick}
            to='/lacak'
            className="px-6 py-2 text-white transition duration-300 ease-in-out transform bg-[#60588d] rounded-full hover:bg-purple-700 hover:scale-105"
          >
            Cek
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalKode;
