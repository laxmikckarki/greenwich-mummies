import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import image1  from '../Assets/image1.jpg';

function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage("Greenwich Mums");
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
      		<div className="container">
			  <div className="header">
        	   <h1 className="heading">Greenwich Mums</h1>
               <Link to="/login">Login</Link>
         	 </div>
        	<div className="content">
         	 <div className="left">
           	 <img
              className="cyf-image"
              src={image1}

              alt="Community mums group"
            />
			<image1/>
          </div>
        </div>
	  </div>
	</main>
   );
}

export default Home;