import { SetStateAction, useState } from 'react';

function Login() {
  const [entrance, setEntrance] = useState('');

  function validEntrance() {
    return entrance.length >= 3;
  }
  function handleInputChange(event: { target: { value: SetStateAction<string>; }; }) {
    setEntrance(event.target.value);
  }
  return (
    <form>
      <input
        data-testid="login-name-input"
        type="text"
        value={ entrance }
        onChange={ handleInputChange }
      />
      <button
        disabled={ !validEntrance() }
        data-testid="login-submit-button"
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
