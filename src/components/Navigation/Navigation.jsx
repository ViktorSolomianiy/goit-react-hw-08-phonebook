import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import './Navigation.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header-nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'active link' : 'link inactive'
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? 'active link' : 'link inactive'
          }
        >
          Contacts
        </NavLink>
      )}
    </header>
  );
};
