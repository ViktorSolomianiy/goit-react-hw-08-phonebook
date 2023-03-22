import { useDispatch } from 'react-redux';
import './UserMenu.css';

import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="user-container">
      <p className="user-name">{user.name}</p>
      <button onClick={() => dispatch(logOut())} className="user-logout">
        Logout
      </button>
    </div>
  );
};
