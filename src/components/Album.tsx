import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

function Album() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [musicList, setMusicList] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getMusics(id);
          setMusicList(data);
          setIsLoading(false);
        } catch (error) {
          //criar um component para tratar erros :d
        }
      };
  
      fetchData();
    }, [id]);
    
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {musicList.map((music) => (
            <li 
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Album;
