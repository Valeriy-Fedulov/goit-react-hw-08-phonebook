import React from 'react';
import { useDispatch } from 'react-redux';

function RegisterView() {
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return;
      case 'email':
        return;
      case 'password':
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(authOperations.logIn({ login, email, password }));
  };

  return (
    <>
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя
          {/* <input type="text" name="name" value={name} onChange={ handleChange}/> */}
        </label>

        <label>
          Почта
          {/* <input type="email" name="email" value={email} onChange={ handleChange}/> */}
        </label>

        <label>
          Пароль
          {/* <input type="password" name="password" value={password} onChange={ handleChange}/> */}
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}
