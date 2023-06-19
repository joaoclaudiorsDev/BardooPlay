import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';

function Login() {
  const [entrance, setEntrance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  function validEntrance() {
    return entrance.length >= 3;
  }

  function handleInputChange(event: { target: { value: SetStateAction<string> } }) {
    setEntrance(event.target.value);
  }

  const handleLogin = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    await createUser({ name: entrance });
    setIsLoading(false);
    navigation('/search');
  };

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
        onClick={ handleLogin }
      >
        Entrar
      </button>
      {isLoading && <p>Carregando...</p>}
    </form>
  );
}

export default Login;
