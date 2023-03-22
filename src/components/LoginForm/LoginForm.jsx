import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import './LoginForm.css';

import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements;

    dispatch(
      logIn({
        email: form.email.value,
        password: form.password.value,
      })
    );
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="login-form">
      <TextField
        label="Email"
        type="email"
        name="email"
        id="outlined-basic"
        variant="outlined"
        // Styles
        size="small"
        color="warning"
        sx={{ width: '300px' }}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        id="outlined-basic"
        variant="outlined"
        // Styles
        size="small"
        color="warning"
        sx={{ width: '300px' }}
      />
      <Button
        type="submit"
        variant="outlined"
        color="warning"
        size="large"
        sx={{ width: '120px', height: '35px' }}
        pt={4}
      >
        Log In
      </Button>
    </form>
  );
};
