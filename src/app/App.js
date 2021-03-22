import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Services from '../components/services/Services';
import Experience from '../experience/Experience';
import About from './../components/about/About';
import Portfolio from './../components/portfolio/Portfolio';
import Testimonial from './../components/testimonial/Testimonial';
import './App.css';

function App() {
	return (
		<>
			<Particles
				className='particles-canvas'
				params={{
					particles: {
						number: {
							value: 60,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: 'triangle',
							stroke: {
								width: 15,
								color: '#38A115',
							},
						},
					},
				}}
			/>
			<Navbar/>
			<Header/>
			<About/>
			<Services/>
			<Experience/>
			<Portfolio/>
			<Testimonial/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
