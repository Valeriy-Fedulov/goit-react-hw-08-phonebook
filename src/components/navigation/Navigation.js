import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const active = ({ isActive }) => (isActive ? s.activeLink : s.link);

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={active}>
        Главная
      </NavLink>
      <NavLink to="/contacts" className={active}>
        Контакты
      </NavLink>
    </nav>
  );
}
