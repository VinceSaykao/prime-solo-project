import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LoginForm.scss';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2
        id="welcome"
      >Welcome</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <br></br>
        <br></br>

        <input
          id='user-input'
          placeholder='| Username'
          type="text"
          name="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

      </div>
      <div>


        <input
          placeholder='| Password'
          id='password-input'
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

      </div>
      <div>
            <Stack spacing={2} direction="row">
      <Button 
      id='login'
      type='submit'
      variant="outlined">Log In</Button>
      </Stack>
      </div>
      <br></br>
      <br></br>
      <button
        id='register'
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push('/registration');
        }}
      >
        Create Account 
      </button>

      {/* <button
      id='trouble'
      >Can't Log In</button> */}
    </form>
  );
}

export default LoginForm;
