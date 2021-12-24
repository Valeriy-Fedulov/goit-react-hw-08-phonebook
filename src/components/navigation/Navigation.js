import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const active = ({ isActive }) => (isActive ? s.activeLink : s.link);

const Navigation = () => (
  <nav>
    <NavLink to="/" className={active}>
      Главная
    </NavLink>

    <NavLink to="/todos" className={active}>
      Заметки
    </NavLink>
  </nav>
);

export default Navigation;
