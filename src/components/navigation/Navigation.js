import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

import Stack from '@mui/material/Stack';

const active = ({ isActive }) => (isActive ? s.activeLink : s.link);

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Stack spacing={2} direction="row">
        <NavLink to="/" className={active}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={active}>
            Contacts
          </NavLink>
        )}
      </Stack>
    </nav>
  );
};

export default Navigation;
