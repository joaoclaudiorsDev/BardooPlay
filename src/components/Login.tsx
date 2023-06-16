import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/userAPI';

function Login() {
  const [entrance, setEntrance] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function validEntrance() {
    return entrance.length >= 3;
  }
  function handleInputChange(event: { target: { value: SetStateAction<string>; }; }) {
    setEntrance(event.target.value);
  }
  function handleLogin() {
    if (validEntrance()) {
      setIsLoading(true); // Ativa o status de carregamento

      createUser({ name: entrance })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }
  const handleClick = () => {
    handleLogin();
  };

  return (
    <form>
      <input
        data-testid="login-name-input"
        type="text"
        value={ entrance }
        onChange={ handleInputChange }
      />
      <Link to="/search">
        <button
          disabled={ !validEntrance() }
          data-testid="login-submit-button"
          onClick={ handleClick }
        >
          Entrar
        </button>
      </Link>
      {isLoading && <p>Carregando...</p>}
    </form>
  );
}

export default Login;
