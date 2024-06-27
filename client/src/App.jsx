import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Lapor from './pages/Lapor';
import FormAnak from './pages/FormAnak'; 
import FormOrtu from './pages/FormOrtu'; 
import Lacak from './pages/Lacak';
import NotFound from './pages/NotFound';
import Navbar from './Components/Navbar';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/lapor' element={<Lapor/>} />
      <Route path='/lapor/anak' element={<FormAnak/>} />
      <Route path='/lapor/wali' element={<FormOrtu/>} />
      <Route path='/lacak' element={<Lacak/>} /> 
      <Route path='*' element={<NotFound />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
    </>
  );
};

export default App;
