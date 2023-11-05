import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
