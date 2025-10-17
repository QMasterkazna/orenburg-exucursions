import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
// import Excursions from './pages/Excursions';
// import About from './pages/About';
// import Contacts from './pages/Contacts';
// import Register from './pages/Register';
// import Account from './pages/Account';
// import Search from './pages/Search';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;