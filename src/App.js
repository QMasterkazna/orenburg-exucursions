import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ExcursionDetail from './pages/ExcursionDetail/ExcursionDetail';
import Register from './pages/Register/Register';
import Account from './pages/Account/Account';
import OrderHistory from './pages/OrderHistory/OrederHistory';
import ConfirmBooking from './pages/ConfirmBooking/ConfirmBooking';

function App() {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <Header />
        <main className="main-content flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/excursion/:id" element={<ExcursionDetail />} />
            <Route path='/register' element={ <Register /> } />
            <Route path='/account' element={ <Account /> } />
            <Route path='/history' element={ <OrderHistory /> } />
            <Route path='/confirm/:id' element={ <ConfirmBooking /> } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;