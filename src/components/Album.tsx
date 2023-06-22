import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';
import { SongType, AlbumType } from '../types';
import Header from './Header';

function Album() {
  const [albumDescribe, setAlbumDescribe] = useState<AlbumType>();
  const [songs, setSongs] = useState<Array<SongType>>([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchAPI = async () => {
      if (id) {
        setLoading(true);
        const data = await getMusics(id);
        setAlbumDescribe(data[0]);
        setSongs(data.slice(1) as SongType[]);
        setLoading(false);
      }
    };

    fetchAPI();
  }, [id]);

  return loading
    ? (<Loading />)
    : (
      <>
        <Header />
        <div>
          <img src={ albumDescribe?.artworkUrl100 } alt="foto do álbum" />
          <h3 data-testid="album-name">{albumDescribe?.collectionName}</h3>
          <h4 data-testid="artist-name">{albumDescribe?.artistName}</h4>
        </div>
        <div>
          <ul>
            {songs.map((music) => (
              <li key={ music.trackId }>
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ 0 }
                />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default Album;
