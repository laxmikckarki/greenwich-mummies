import React, { useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import RegisterPage from './Components/RegisterPage';


function App() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setHasAccount={setHasAccount}  />} />
          <Route path="/register" element={<RegisterPage setHasAccount={setHasAccount}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
