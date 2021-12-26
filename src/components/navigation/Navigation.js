import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

const active = ({ isActive }) => (isActive ? s.activeLink : s.link);

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={active}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={active}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
