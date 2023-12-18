import React, { useState } from 'react';
import auth from './authen';
import{useNavigate} from "react-router-dom";
import { shades } from "../../theme";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { CenterFocusStrong } from '@mui/icons-material';

export const Login = () => {

  const navigate = useNavigate()

  // User information hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to call submit
  const callSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await auth.login(email, password);
      if (data) {
        navigate("/")
      }
    } 
    catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } 
      else {
        if (err === 'LOGIN_BAD_CREDENTIALS') {
          setError('Incorrect credentials');
        }
        else {
          setError('Error occured in the API.');
        }
      }
    }
  };

  return (
    <div >
      <form onSubmit={(callSubmit)}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Sign in</h1>
        <label><b>Email: </b></label><br />
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/><br />
        <label><b>Password: </b></label><br />
        <input type="password" placeholder="Enter password" value={password} onChange={(p) => setPassword(p.currentTarget.value)}/><br />
        <br />
        <Box display="flex" justifyContent="center" gap="30px">
        <Button 
                  type="submit"
                  color="primary"
                  variant="contained"  sx={{
                    
                    backgroundColor: shades.primary[400],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 40px",
                    
                  }}>Log in</Button></Box>
      </form>
      <form onSubmit={()=>navigate("/register")}>
            <h2>Don't have an account?  <button type="submit">Sign Up</button>
            </h2>
      </form>
    </div>
  );
}

export default Login;