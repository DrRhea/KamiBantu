import React from 'react';
import { useHistory } from 'react-router-dom';
import anak from '../assets/anak.png';
import ortu from '../assets/ortu.png';

const Modal = ({ isOpen, onClose }) => {
  const history = useHistory();

  if (!isOpen) return null;

  const handleLinkClick = (path) => {
    onClose();
    history.push(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="relative w-11/12 max-w-xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-4 right-4 hover:text-gray-800"
        >
        </button>
        <h3 className="text-xl font-semibold text-center text-[#60588d]">Pilih Identitas</h3>
        <div className="flex flex-col justify-center mt-8 space-y-4 md:flex-row md:justify-between md:space-y-0 md:space-x-4">
          <div 
            onClick={() => handleLinkClick('/anak')}
            className="flex flex-col items-center justify-center w-full p-6 space-y-4 bg-purple-100 rounded-lg cursor-pointer hover:bg-purple-200"
          >
            <img src={anak} alt="anak" className="w-24 h-24 md:w-32 md:h-32" />
            <span className="text-lg font-semibold">Anak</span>
          </div>
          <div 
            onClick={() => handleLinkClick('/ortu')}
            className="flex flex-col items-center justify-center w-full p-6 space-y-4 bg-purple-100 rounded-lg cursor-pointer hover:bg-purple-200"
          >
            <img src={ortu} alt="ortu" className="w-24 h-24 md:w-32 md:h-32" />
            <span className="text-lg font-semibold">Orang Tua</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
