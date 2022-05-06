import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
	const [login, { error }] = useMutation(LOGIN_USER);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

	// submit form
	const handleFormSubmit = async event => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...formState }
			});
		
			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}
	};

  return (
    <main className='container flex'>
      <div className='col-12'>
        <div className='card mt-4'>
          <h4 className='card-header text-center'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
						<div className="d-grid mb-3">
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
							<div className="d-grid mb-3">
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
						{error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;