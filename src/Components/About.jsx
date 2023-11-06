import React from 'react';
import image3  from '../Assets/image3.jpg';


const About = () => (
	<main role="main">
		<div>
			<h1>Greenwich Mums</h1>
			<img
			  className = "loginBg"
			  src={image3}
			  width="500"
			  height="350"
			  alt="greenwich-mums"
			></img>
			<image2/>
			
		</div>
	</main>
);

export default About;
