import { SongType } from '../types';

type SongsProps = {
  songs: SongType;
};

function MusicCard({ songs: { trackName, previewUrl } }: SongsProps) {
  return (
    <div data-testid="music-card">
      <h3>
        {' '}
        {trackName}
      </h3>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>
    </div>
  );
}
export default MusicCard;
