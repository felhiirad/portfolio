import React from 'react';
import cityGuide from '../../img/portfolio/city-guide-app.png';
import netflix from '../../img/portfolio/netflix.png';

import taskManager from '../../img/portfolio/task-manager.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

export default function Portfolio() {
	//**************** Netflix ****************//
	const openPopupboxNetflix = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={netflix}
					alt='Netflix Clone Project'
				/>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
					cumque illo est expedita quos adipisci suscipit unde itaque qui
					perferendis.
				</p>
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/felhiirad?tab=repositories')
					}
				>
					https://github.com/felhiirad?tab=repositories
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: 'Netflix Clone Project'
				}
			}
		});
	};

	const popupboxConfigNetflix = {
		titleBar: {
			enable: true,
			text: 'Netflix Clone Project',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	//**************** City Guide App ****************//
	const openPopupboxCityGuide = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={cityGuide}
					alt='City Guide App Project'
				/>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
					cumque illo est expedita quos adipisci suscipit unde
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/felhiirad?tab=repositories',
							'_blank'
						)
					}
				>
					https://github.com/felhiirad?tab=repositories
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/felhiirad?tab=repositories',
							'_blank'
						)
					}
				>
					https://github.com/felhiirad?tab=repositories
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: 'City Guide App Project',
				},
			},
		});
	};

	const popupboxConfigCityGuide = {
		titleBar: {
			enable: true,
			text: 'City Guide App Project',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	//**************** Portfolio Project ****************//
	/* const openPopupboxPortfolio = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={portfolio}
					alt='Portfolio Project'
				/>
				<p>
					
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/felhiirad?tab=repositories',
							'_blank'
						)
					}
				>
					https://github.com/felhiirad?tab=repositories
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/felhiirad?tab=repositories',
							'_blank'
						)
					}
				>
					https://github.com/felhiirad?tab=repositories
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: 'Portfolio Project with Material UI Library',
				},
			},
		});
	};

	const popupboxConfigPortfolio = {
		titleBar: {
			enable: true,
			text: 'Portfolio Project with Material UI Library',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};*/

	//**************** Task Manager ****************//
	const openPopupboxTaskManager = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={taskManager}
					alt='Task Manager React and Redux Project'
				/>
				<p>
					nice app of task manager i use redux and react redux
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/felhiirad?tab=repositories',
							'_blank'
						)
					}
				>
					https://react-redux-task-manager.herokuapp.com/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/8020Coding/task-manager',
							'_blank'
						)
					}
				>
					https://github.com/felhiirad?tab=repositories
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: 'Task Manager with React and Redux',
				},
			},
		});
	};

	const popupboxConfigTaskManager = {
		titleBar: {
			enable: true,
			text: 'Task Manager with React and Redux',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div id='portfolio' className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>portfolio</h1>
				<div className='image-box-wrapper row justify-content-center'>
					<div
						className='portfolio-image-box'
						onClick={openPopupboxNetflix}
					>
						<img
							className='portfolio-image'
							src={netflix}
							alt='Netflix Clone Project'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

					{/* - */}

					<div
						className='portfolio-image-box'
						onClick={openPopupboxCityGuide}
					>
						<img
							className='portfolio-image'
							src={cityGuide}
							alt='City Guide Project'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

					{/* - */}

					

					{/* - */}

					<div
						className='portfolio-image-box'
						onClick={openPopupboxTaskManager}
					>
						<img
							className='portfolio-image'
							src={taskManager}
							alt='React and Redux Project'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigNetflix} />
			<PopupboxContainer {...popupboxConfigCityGuide} />
			
			<PopupboxContainer {...popupboxConfigTaskManager} />
		</div>
	);
}
