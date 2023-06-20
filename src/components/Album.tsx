import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';
import { SongType, AlbumType } from '../types';

type MyParams = {
  id: string;
};

function Album() {
  const [albumDescribe, setAlbumDescribe] = useState<AlbumType | null>(null);
  const [songs, setSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams<MyParams>();

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getMusics(String(id));
      setAlbumDescribe(data[0]);
      setSongs(data.slice(1) as SongType[]);
      setLoading(false);
      console.log('retornou');
    };

    fetchAPI();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h3 data-testid="album-name">{albumDescribe?.collectionName}</h3>
          <h4 data-testid="artist-name">{albumDescribe?.artistName}</h4>
          <ul>
            {songs.map((music) => (<MusicCard key={ music.trackId } songs={ music } />))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Album;
