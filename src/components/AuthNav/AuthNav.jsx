import { NavLink } from 'react-router-dom';
import './AuthNav.css';

export const AuthNav = () => {
  return (
    <div className="login-container">
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? 'active link' : 'link inactive'
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? 'active link' : 'link inactive'
        }
      >
        Log In
      </NavLink>
    </div>
  );
};
