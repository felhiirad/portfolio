import React from 'react';
import author from '../../img/about/about-image.jpg';

export default function About() {
	return (
		<div id='about' className='container py-5'>
			<div className='row'>
				<div className='col-lg-6 col-xs-12'>
					<div className='photo-wrap mb-5'>
						<img
							className='profile-img'
							src={author}
							alt='Author photo'
						/>
					</div>
				</div>
				<div className='about-info col-lg-6 col-xs-12'>
					<h1 className='about-heading'>about me</h1>
               <p>
			   Hello! I am <strong>Irad Felhi</strong>. I'm a Full-Stack Web Developer. The technologies that I use are <strong>MERN</strong>(MongoDB, Express, ReactJS, and NodeJS). I create responsive websites that can be displayed on all devices desktops and smartphones. Of course, before I begin developing any webapp, Landing Page, Business Website, or E-commerce, I will need to have a ready-made project layout (sketch). Before I start developing your website, we will discuss all the details of your niche with you. I will conduct a survey about your competitors and make a list of their strengthens and weaknesses. as soon as the website is done and ready to deploy and sell a product or service I will create an advertising campaign for you in Google AdWords and Facebook since your potential clients must know about you. 
               </p>
				</div>
			</div>
		</div>
	);
}
