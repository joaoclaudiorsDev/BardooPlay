import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from './Header';

interface Album {
  collectionId: number;
  collectionName: string;
}

function Search() {
  const [entrance, setEntrance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  function validEntrance() {
    return entrance.length >= 2;
  }

  async function handleLogin() {
    if (validEntrance()) {
      setIsLoading(true);

      const response: Album[] = await searchAlbumsAPI(entrance);

      setIsLoading(false);
      setAlbums(response);
      setSearchTerm(entrance);
      setEntrance('');
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEntrance(event.target.value);
  }

  return (
    <div>
      <Header />
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

      {isLoading && <p> Carregando...</p>}

      {albums.length > 0 ? (
        <div>
          <p>{`Resultado de álbuns de: ${searchTerm}`}</p>
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
        <p>
          {searchTerm ? `Nenhum álbum foi encontrado para: ${searchTerm}`
            : 'Digite o nome de um artista para pesquisar'}
        </p>
      )}
    </div>
  );
}

export default Search;
