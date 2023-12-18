import React, { useState } from 'react';
import auth from './authen';
import{useNavigate} from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate()

  // User information hook
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  // Function to call submit
  const callSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await auth.register(firstName, lastName, email, password, passwordConfirmation);
      if (data) {
        await auth.login(email, password);
        alert('Registration Successful!');
        navigate("/");
      }
    }
    catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } 
      else {
        if (err === 'REGISTER_USER_ALREADY_EXISTS') {
          setError('Email ID is already registered. Please use your credentials to login.');
        }
        else {
          setError('Error occured in the API.');
        }
      }
    }
  };

  return (
    <>
           <br />
        <br />
        <br />
        <br />
        <br />
      <h2>Register</h2>
      <form onSubmit={callSubmit}>
        <p>
            <label>First Name: </label>
            <input type="text" placeholder="Enter first name" value={firstName} onChange={(f) => setFirstName(f.currentTarget.value)} />
        </p>
        <p>
            <label>Last Name: </label>
            <input type="text" placeholder="Enter last name" value={lastName} onChange={(l) => setLastName(l.currentTarget.value)} />
        </p>
        <p>
            <label>Email: </label>
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        </p>
        <p>
            <label>Password: </label>
            <input type="password" placeholder="Enter password" value={password} onChange={(p) => setPassword(p.currentTarget.value)}/>
        </p>
        <p>
            <label>Confirm Password: </label>
            <input type="password" placeholder="Confirm password" value={passwordConfirmation} onChange={(p) => setPasswordConfirmation(p.currentTarget.value)}/>
        </p>
        <button type="submit">Register</button>
      </form>
     
    </>
  );
};