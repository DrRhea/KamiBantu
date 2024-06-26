import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Lapor from './pages/Lapor';
import FormAnak from './pages/FormAnak'; 
import FormOrtu from './pages/FormOrtu'; 
import Lacak from './pages/Lacak';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/lapor' element={<Lapor/>} />
      <Route path='/lapor/anak' element={<FormAnak/>} />
      <Route path='/lapor/wali' element={<FormOrtu/>} />
      <Route path='/lacak' element={<Lacak/>} /> 
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
