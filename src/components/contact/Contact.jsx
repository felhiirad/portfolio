import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

export default function Contact() {
	const [successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, errors } = useForm();

	const serviceID = 'service_id';
	const templateID = 'template_ivwhn5s';
	const userID = 'user_Oi7MpIIoni60Ba2wbv0Ur';

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
		)
		r.target.reset();

	}


const sendEmail = (serviceID, templateID, variables, userID) => {

	emailjs
		.send(serviceID, templateID, variables, userID)
		.then(() => {
			setSuccessMessage(
				"Your message was successfully sent!  I'll contact you as soon as possible."
			);
		})
		.catch(err => console.error(`Something went wrong ${err}`));
};

   return (
		<div id='contact' className='contacts'>
			<div className='text-center'>
				<h1>contact me</h1>
				<p>
					Fill out the form, briefly describe your project, and I will
					contact you as soon as possible.
				</p>
				<span className='success-message'>{successMessage}</span>
			</div>
			<div className='container'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='First and last name'
									name='name'
									ref={register({
										required: 'First and last name are required!',
										pattern: {
											value: /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i,
											message: 'Invalid First and Last Name!',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.name && errors.name.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Phone number'
									name='phone'
									ref={register({
										required: 'Phone number is required!',
										pattern: {
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.phone && errors.phone.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='email'
									placeholder='Email'
									name='email'
									ref={register({
										required: 'Email address is required!',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid Email Address!',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.email && errors.email.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Subject'
									name='subject'
									ref={register({
										required: 'A Subject is required!',
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.subject && errors.subject.message}
							</span>
						</div>

						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<textarea
									className='form-control'
									type='text'
									placeholder='Brief Message'
									name='description'
									ref={register({
										required: 'A Brief Message is required!',
										minLength: {
											value: 30,
											message:
												'Your message must be at least 30 characters!',
										},
									})}
								></textarea>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.description && errors.description.message}
							</span>
							<button
								className='btn-main-offer contact-btn'
								type='submit'
							>
								send message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
