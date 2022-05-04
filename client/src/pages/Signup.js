import React, { useState } from 'react';
import { Form, Button, Alert,  } from "react-bootstrap";
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

const Signup = () => {
  // const [formState, setFormState] = useState({ username: '', email: '', password: '' });
	// const [addUser, { error }] = useMutation(ADD_USER);

  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

	// // submit form (notice the async!)
	// const handleFormSubmit = async event => {
	// 	event.preventDefault();

	// 	// use try/catch instead of promises to handle errors
	// 	try {
	// 		const { data } = await addUser({
	// 			variables: { ...formState }
	// 		});

	// 		Auth.login(data.addUser.token);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUser">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter username" />
      <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
};

export default Signup;

// <main className='flex-row justify-center mb-4'>
//       <div className='col-12 col-md-6'>
//         <div className='card'>
//           <h4 className='card-header'>Sign Up</h4>
//           <div className='card-body'>
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className='form-input'
//                 placeholder='Your username'
//                 name='username'
//                 type='username'
//                 id='username'
//                 value={formState.username}
//                 onChange={handleChange}
//               />
//               <input
//                 className='form-input'
//                 placeholder='Your email'
//                 name='email'
//                 type='email'
//                 id='email'
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               <input
//                 className='form-input'
//                 placeholder='******'
//                 name='password'
//                 type='password'
//                 id='password'
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <button className='btn d-block w-100' type='submit'>
//                 Submit
//               </button>
//             </form>
// 						{error && <div>Sign up failed</div>}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
