import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Preferences from './pages/preferences';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/preferences' element ={<Preferences/>} />
    </Routes>
    </Router>
);
}
  
export default App;