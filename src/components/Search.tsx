import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

function Search() {
  const [entrance, setEntrance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  function validEntrance() {
    return entrance.length >= 2;
  }

  async function handleLogin() {
    if (validEntrance()) {
      setIsLoading(true);

      const response = await searchAlbumsAPI(entrance);

      setIsLoading(false);
      setAlbums(response);
      setEntrance('');
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEntrance(event.target.value);
  }

  return (
    <div>
      <div>
        <input
          data-testid="search-artist-input"
          type="text"
          value={ entrance }
          onChange={ handleInputChange }
        />

        <button
          data-testid="search-artist-button"
          disabled={ !validEntrance() }
          onClick={ handleLogin }
        >
          Pesquisar
        </button>
      </div>

      {isLoading && <p>Carregando...</p>}

      {albums.length > 0 ? (
        <div>
          <p>{`Resultado de álbuns de: ${entrance}`}</p>
          <ul>
            {albums.map((album) => (
              <li key={ album.collectionId }>
                <a
                  href={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                >
                  {album.collectionName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{`Nenhum álbum foi encontrado para: ${entrance}`}</p>
      )}
    </div>
  );
}

export default Search;
