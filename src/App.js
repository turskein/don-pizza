import './App.css';
import React from 'react';
import NavbarComponent from './components/NavbarComponent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import IndexComponent from './components/IndexComponent';


function App() {
  return (
    <div>
      <NavbarComponent />
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<IndexComponent/>}></Route>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
