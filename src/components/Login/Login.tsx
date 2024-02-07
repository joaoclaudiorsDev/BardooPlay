import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';
import './login.css';

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

  return isLoading
    ? (<Loading />)
    : (
      <div id="main-div-login">
        <div id="logo-login">
          <h1> Bardoo </h1>
          <img id="icon-login" width="64" height="64" src="https://img.icons8.com/laces/64/play.png" alt="play" />
        </div>
        <form id="form-login">
          <label id="label-login" htmlFor="input-login">Fazer Login</label>
          <input
            id="input-login"
            data-testid="login-name-input"
            type="text"
            placeholder="Username"
            value={ entrance }
            onChange={ handleInputChange }
          />
          <button
            id="button-login"
            disabled={ !validEntrance() }
            data-testid="login-submit-button"
            onClick={ handleLogin }
          >
            Entrar
          </button>
          <div id="div-pai-gif">
            <img id="gif-login" src="https://media.tenor.com/SPBY7p57W5AAAAAi/cute-music.gif" alt="GIF" />
          </div>
        </form>
      </div>

    );
}

export default Login;
