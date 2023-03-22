import { useDispatch } from 'react-redux';
import './UserMenu.css';

import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import defaultAvatar from '../../image/defaultAvatar.png';

import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="user-container">
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="40px"
        height="40px"
      />
      <p className="user-name">{user.name}</p>
      <Button
        onClick={() => dispatch(logOut())}
        type="submit"
        variant="outlined"
        color="warning"
        size="large"
        sx={{ width: '120px', height: '35px' }}
        pt={4}
      >
        Logout
      </Button>
    </div>
  );
};
