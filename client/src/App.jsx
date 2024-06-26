import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lapor from './pages/Lapor';
import FormAnak from './pages/FormAnak'; 
import FormOrtu from './pages/FormOrtu'; 
import Lacak from './pages/Lacak';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lapor" component={Lapor} />
          <Route exact path="/anak" component={FormAnak} /> 
          <Route exact path="/ortu" component={FormOrtu} /> 
          <Route exact path="/lacak" component={Lacak} /> 
        </Switch>
      </div>
    </Router>
  );
};

export default App;
