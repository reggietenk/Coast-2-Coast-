// see SignupForm.js for comments
import React, { useState, } from "react";
import { Form, Button, Alert,  } from "react-bootstrap";
// import { useMutation } from "@apollo/react-hooks";
// import { LOGIN_USER } from "../utils/mutations";
// import Auth from "../utils/auth";


const Login = (props) => {
  // const [formState, setFormState] = useState({ email: '', password: '' });
	// const [login, { error }] = useMutation(LOGIN_USER);


  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

	// // submit form
	// const handleFormSubmit = async event => {
	// 	event.preventDefault();

	// 	try {
	// 		const { data } = await login({
	// 			variables: { ...formState }
	// 		});

	// 		Auth.login(data.login.token);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

  return (
    <Form>
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


export default Login;