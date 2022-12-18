import './App.css';
import React from 'react';
import NavbarComponent from './components/NavbarComponent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import IndexComponent from './components/IndexComponent';
import CartShopComponent from './components/CartShopComponent'
import FooterComponent from './components/FooterComponent'
import ClearCarritoModalComponent from './components/modals/ClearCarritoModalComponent'
import CatalogoComponent from './components/CatalogoComponent';
import PersonalizarPizzaComponent from './components/PersonalizarPizzaComponent';
import PagarComponent from './components/PagarComponent';
import PersonPizzaAdded from './components/modals/PersonPizzaAdded';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<IndexComponent/>}></Route>
            <Route path="/catalogo" exact element={<CatalogoComponent/>}></Route>
            <Route path="/personalizar" exact element={<PersonalizarPizzaComponent/>}></Route>
            <Route path="/pagar" exact element={<PagarComponent/>}></Route>
          </Routes>
        </div>
      </Router>
      <CartShopComponent/>
      <FooterComponent/>
      <ClearCarritoModalComponent/>
      <PersonPizzaAdded/>
    </div>
  );
}

export default App;
