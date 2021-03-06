import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const active = ({ isActive }) => (isActive ? s.activeLink : s.link);

export default function AuthNav() {
  return (
    <Stack
      spacing={2}
      direction="row"
      divider={<Divider orientation="vertical" color="white" flexItem />}
    >
      <NavLink to="/register" className={active}>
        Sing up
      </NavLink>
      <NavLink to="/login" className={active}>
        Login
      </NavLink>
    </Stack>
  );
}
