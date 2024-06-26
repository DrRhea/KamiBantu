import React, { useState } from 'react';
import ModalKode from './ModalKode';

const FormOrtu = () => {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    usiaAnak: '',
    jenisKejadian: '',
    deskripsiKejadian: '',
    fileBukti: '',
    isAnonym: false,
  });

  const [formErrors, setFormErrors] = useState({
    nama: false,
    telepon: false,
    usiaAnak: false,
    jenisKejadian: false,
    deskripsiKejadian: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reportCode, setReportCode] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form sebelum submit
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'isAnonym' && key !== 'fileBukti') {
        errors[key] = true;
      } else {
        errors[key] = false;
      }
    });
    setFormErrors(errors);

    const isValid = Object.values(errors).every((val) => !val);
    if (isValid) {
      console.log('Form valid. Kirim data:', formData);
      // Simulasi pembuatan kode laporan
      const generatedCode = '12345ABC';
      setReportCode(generatedCode);
      setModalIsOpen(true); // Tampilkan modal setelah sukses submit
    } else {
      console.log('Form belum lengkap. Silakan isi semua form.');
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#a398d8]">
        <header className="text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">Pusat Pengaduan</h1>
          <p className="mt-2">
            Silakan isi formulir di bawah ini untuk menerima penanganan untuk kasus Anda. Tambahkan detail sesuai kebutuhan.
          </p>
        </header>
        <div className="w-full max-w-2xl p-6 mt-8 bg-white shadow-lg rounded-xl">
          <h2 className="mb-4 text-xl font-bold text-[#60588d]">Sampaikan Laporan Anda</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Nama</label>
              <input
                type="text"
                className={`w-full px-3 py-2 border ${formErrors.nama ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                placeholder="Ketik Nama Anak"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                required
              />
              {formErrors.nama && <p className="text-red-500">Nama harus diisi.</p>}
            </div>
            <div className="mb-4">
  <label className="block mb-2 text-gray-700">Telepon</label>
  <input
    type="tel"
    className={`w-full px-3 py-2 border ${formErrors.telepon ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
    placeholder="Ketik Nomor Telepon Anda"
    name="telepon"
    value={formData.telepon}
    onChange={handleInputChange}
    pattern="[0-9]{10,13}"
    title="Nomor telepon harus terdiri dari 10-13 digit angka"
    required
  />
  {formErrors.telepon && <p className="text-red-500">Telepon harus diisi dengan format yang benar.</p>}
</div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Usia Anak</label>
              <select
                className={`w-full px-3 py-2 border ${formErrors.usiaAnak ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                name="usiaAnak"
                value={formData.usiaAnak}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih Usia Anak</option>
                <option value="0-2 tahun">0-2 tahun</option>
                <option value="3-5 tahun">3-5 tahun</option>
                <option value="6-10 tahun">6-10 tahun</option>
                <option value="11-15 tahun">11-15 tahun</option>
                <option value="16-18 tahun">16-18 tahun</option>
              </select>
              {formErrors.usiaAnak && <p className="text-red-500">Usia anak harus dipilih.</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Jenis Kejadian</label>
              <select
                className={`w-full px-3 py-2 border ${formErrors.jenisKejadian ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                name="jenisKejadian"
                value={formData.jenisKejadian}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih Jenis Kejadian</option>
                <option value="Kekerasan Fisik">Kekerasan Fisik</option>
                <option value="Kekerasan Psikologis">Kekerasan Psikologis</option>
                <option value="Kekerasan Seksual">Kekerasan Seksual</option>
                <option value="Kekerasan Eksploitasi">Kekerasan Eksploitasi</option>
                <option value="Kasus Lainnya">Kasus Lainnya</option>
              </select>
              {formErrors.jenisKejadian && <p className="text-red-500">Jenis kejadian harus dipilih.</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Deskripsi Kejadian</label>
              <textarea
                className={`w-full px-3 py-2 border ${formErrors.deskripsiKejadian ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                placeholder="Ketik Deskripsi Kejadian Anda"
                name="deskripsiKejadian"
                value={formData.deskripsiKejadian}
                onChange={handleInputChange}
                required
              ></textarea>
              {formErrors.deskripsiKejadian && <p className="text-red-500">Deskripsi Kejadian harus diisi.</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Upload Bukti</label>
              <input type="file" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="flex items-center mb-4">
              <label className="inline-flex items-center mr-6 text-gray-700">
                <input
                  type="checkbox"
                  name="isAnonym"
                  className="form-checkbox"
                  checked={formData.isAnonym}
                  onChange={() => setFormData({ ...formData, isAnonym: !formData.isAnonym })}
                />
                <span className="ml-2">Anonym</span>
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-2 text-white bg-[#60588d] rounded-lg">
                LAPOR!
              </button>
            </div>
          </form>
        </div>
      </div>
      {modalIsOpen && <ModalKode isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} reportCode={reportCode} />}
    </div>
  );
};

export default FormOrtu;
