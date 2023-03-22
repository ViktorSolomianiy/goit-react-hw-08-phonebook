import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import './RegisterForm.css';

import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { options } from 'utils/optionsToastStyled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (email.trim() === '' || password.trim() === '' || name.trim() === '') {
      return toast.warn('Please fill in all fields!', options);
    }

    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="register-form">
      <TextField
        label="Username"
        type="text"
        name="name"
        id="outlined-basic"
        variant="outlined"
        // Styles
        size="medium"
        color="warning"
        sx={{ width: '400px' }}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        id="outlined-basic"
        variant="outlined"
        // Styles
        size="medium"
        color="warning"
        sx={{ width: '400px' }}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        id="outlined-basic"
        variant="outlined"
        // Styles
        size="medium"
        color="warning"
        sx={{ width: '400px' }}
      />
      <Button
        type="submit"
        variant="outlined"
        color="warning"
        size="large"
        sx={{ width: '200px', height: '50px' }}
        pt={4}
      >
        Register
      </Button>
    </form>
  );
};
