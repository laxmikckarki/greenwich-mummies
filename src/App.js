import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Page/Home';
import Login from './Page/Login';
import About from './Page/About';
import RegisterPage from './Page/RegisterPage';


function App() {
  const [hasAccount, setHasAccount] = useState(false);
  
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setHasAccount={setHasAccount}  />} />
          <Route path="/register" element={<RegisterPage setHasAccount={setHasAccount}  />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
