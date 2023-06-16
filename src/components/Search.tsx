import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [entrance, setEntrance] = useState('');
  const navigate = useNavigate();

  function validEntrance() {
    return entrance.length >= 2;
  }

  return (

    <div>
      <input
        data-testid="search-artist-input"
        type="text"
      />

      <button
        data-testid="search-artist-button"
        disabled={ !validEntrance() }

      >
        Pesquisar
      </button>
    </div>
  );
}

export default Search;
