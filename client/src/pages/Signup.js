import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
	const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

	// submit form (notice the async!)
	const handleFormSubmit = async event => {
		event.preventDefault();

		// use try/catch instead of promises to handle errors
		try {
			const { data } = await addUser({
				variables: { ...formState }
			});
		
			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header text-center'>Sign Up</h4>
          <div className='card-body'>
            <form className="align-middle" onSubmit={handleFormSubmit}>
							<div className="row mb-3 col-sm-10">
								<input
									className='form-input'
									placeholder='Your username'
									name='username'
									type='username'
									id='username'
									value={formState.username}
									onChange={handleChange}
								/>
							</div>
							<div className="row mb-3 col-sm-10">
								<input
									className='form-input'
									placeholder='Your email'
									name='email'
									type='email'
									id='email'
									value={formState.email}
									onChange={handleChange}
								/>
							</div>
							<div className="row mb-3 col-sm-10">
								<input
									className='form-input'
									placeholder='******'
									name='password'
									type='password'
									id='password'
									value={formState.password}
									onChange={handleChange}
								/>
							</div>
							<div className="d-grid gap-2">
              	<button className="btn btn-outline-dark" variant="primary" type='submit'>Submit</button>
							</div>
            </form>
						{error && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;