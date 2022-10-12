import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Login from './pages/login';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';
import Preferences from './pages/preferences';
  
function App() {
    const [token, setToken] = useState();
        if (!token){
            return <Login setToken={useState} />
        }
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/preferences' element ={<Preferences/>} />
    </Routes>
    </Router>
);
}
  
export default App;