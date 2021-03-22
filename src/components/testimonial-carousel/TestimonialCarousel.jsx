import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonial_1 from '../../img/testimonials/testimonial-1.jpg';
import testimonial_2 from '../../img/testimonials/testimonial-2.jpg';
import testimonial_3 from '../../img/testimonials/testimonial-3.jpg';
import testimonial_4 from '../../img/testimonials/testimonial-4.jpg';
import testimonial_5 from '../../img/testimonials/testimonial-5.jpg';

export default function TestimonialCarousel() {
   return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={3000}
		>
			<>
				<img src={testimonial_1} alt='Male Testimonial 1' />
				<div className='myCarousel'>
					<h3>Marwen Saidi</h3>
					<p>
					The web devoloper irad FELHI has done a fantastic job creating my own  website. Being an artist having a website is key for my work to be seen and irad has achieved all that I wanted my art website to be
					</p>
				</div>
			</>
			<>
				<img src={testimonial_2} alt='Female Testimonial 2' />
				<div className='myCarousel'>
					<h3>Amin SEKRI</h3>
					<p>
					Irad is top-notch. He have hopped into a crazy project with a very short amount of time to get it under control and he have been critical to helping us move our project along. 
					</p>
				</div>
			</>
			<>
				<img src={testimonial_3} alt='Male Testimonial 3' />
				<div className='myCarousel'>
					<h3>Yosri ghabri</h3>
					<p>
					Looking for a detail orientated person, don't hesitate to contact Irad. He helped me by building my responsive website in a timely manner. 
					</p>
				</div>
			</>
			<>
				<img src={testimonial_4} alt='Female Testimonial 4' />
				<div className='myCarousel'>
					<h3>Seifeddine dhahri</h3>
					<p>
					Irad helped me skyrocketed my sales, by developing my e-commerce website in which he integrated Paypal payments.
					</p>
				</div>
			</>
			<>
				<img src={testimonial_5} alt='Male Testimonial 5' />
				<div className='myCarousel'>
					<h3>wissem rabaoui</h3>
					<p>
					Irad did the programming on my website with ease and fantastic to work with.



					</p>
				</div>
			</>
		</Carousel>
	);
};
