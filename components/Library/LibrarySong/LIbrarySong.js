import { useContext } from 'react';
import { Context } from '../../../Hoc/GlobState/GlobState';
import classes from './LibrarySong.module.scss';

const LibrarySong = ({ info }) => {
  
  const [state, setState] = useContext(Context)

  const setCurrentSong = () => setState(prevState => ({
    ...prevState,
    currentSong: {
      ...prevState.currentSong,
      name: info.name,
      artist: info.artist,
      cover: info.cover,
      audio: info.audio,
      id: info.id
    }
  }))

    return (
      <div className={info.id === state.currentSong.id ? classes.ActiveLibrarySong : classes.LibrarySong} onClick={setCurrentSong} tabIndex={0} role="button" onKeyDown={setCurrentSong}>
        <div className="row p-4 d-flex align-items-center">
          <div className="col">
            <img
              src={info.cover}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-8 d-flex flex-column justify-content-center">
            <strong className="mb-0">{info.name}</strong>
            <p className="mb-0">{info.artist}</p>
            <audio src={info.audio}></audio>
          </div>
        </div>
      </div>
    );
}

export default LibrarySong