import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const active = ({ isActive }) => (isActive ? s.activeLink : s.link);

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={active}>
        Регистрация
      </NavLink>
      <NavLink to="/login" className={active}>
        Логин
      </NavLink>
    </div>
  );
}
