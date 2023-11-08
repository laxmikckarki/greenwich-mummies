import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import image1 from "../Assets/image1.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const navigate = useNavigate();

const handleLogin = async (e) => {
	e.preventDefault();
	try {
		const response = await axios.post("/api/login", {
			email,
			password,
		});
		console.log(response.data);

		if (response.data.id) {
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("userEmail", response.data.email);
      localStorage.setItem("userName", response.data.name);
			// Successful login, navigate to the desired page
			navigate("/booking");
		} else {
			// Handle unsuccessful login, show an error message
			alert("Invalid email or password.");
		}
	} catch (error) {

		// Handle any errors that occurred during the login request

    
		console.log("Error occurred during login:", error);
		alert("An error occurred during login.");
	}
};


  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={image1} alt="Mums" />
      </div>
      <main>
      <h1>Greenwich Mums Page</h1>
        <section>
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="login-email" className="login-label">
              Username
            </label>
            <input
              type="text"
              id="login-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />

            <label htmlFor="login-password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
            {/* Stay Logged In checkbox */}
            <div className="stay-logged-in-container">
              <input
                type="checkbox"
                id="stay-logged-in"
                name="stay-logged-in"
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
                className="stay-logged-in-checkbox"
              />
              <label htmlFor="stay-logged-in" className="stay-logged-in-label">
                Stay Logged In
              </label>
            </div>

            {/* Login button */}
            <button type="submit" className="login-button">
              Login
            </button>

            {/* Register link */}
            <div className="register-link-container">
              <span>Do not have an account? </span>
              <button
                type="button"
                className="register-link"
                onClick={handleRegister}
              >
                Register now
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
