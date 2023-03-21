import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
