import React from 'react';

function LoginView() {
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    // dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <>
      <h1>Страница логина</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Почта
          {/* <input type="email" name="email" value={email} onChange={ handleChange}/> */}
        </label>

        <label>
          Пароль
          {/* <input type="password" name="password" value={password} onChange={ handleChange}/> */}
        </label>

        <button type="submit"></button>
      </form>
    </>
  );
}
