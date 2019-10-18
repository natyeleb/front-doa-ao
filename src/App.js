import React from 'react';
import './App.scss';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro.js';
import Noticias from './componentes/Noticias';
import Projeto from './componentes/Projeto';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Home}/>
      <Route path="/noticias" component={Noticias}/>
      <Route path="/cadastro" component={Cadastro}/>
      <Route path="/sobre" component={Projeto}/>
    </Router>
  );
}

export default App;
