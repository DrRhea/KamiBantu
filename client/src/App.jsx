// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lapor from './pages/Lapor';
import FormAnak from './pages/FormAnak'; // Import halaman FormAnak
import FormOrtu from './pages/FormOrtu'; // Import halaman FormOrtu

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lapor" component={Lapor} />
          <Route exact path="/anak" component={FormAnak} /> {/* Rute untuk FormAnak */}
          <Route exact path="/ortu" component={FormOrtu} /> {/* Rute untuk FormOrtu */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
