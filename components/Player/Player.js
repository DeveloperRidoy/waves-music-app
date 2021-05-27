import { useContext, useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay, FaStepBackward, FaStepForward, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import { Context } from '../../Hoc/GlobState/GlobState';
import classes from './Player.module.css' 
import { FORWARD, BACKWARD } from '../../utlls/actions/actions'
import songs from '../../utlls/songs/songs';

const Player = () => {

  const audio = useRef(null);
  const [state, setState] = useContext(Context)
  const [volume, setVolume] = useState({
    muteState: false
  })

  const audioHandler = (e) => {
    const currentTime = e.target.currentTime;
    const durationTime = e.target.duration;
    setState({
      ...state,
      currentSong: { ...state.currentSong, currentTime, durationTime },
    });

  currentTime === durationTime && changeSong(FORWARD)
  };

    
  const toggleAudioPlaying = () => {
    setState(prevState => ({ ...prevState, currentSong: { ...prevState.currentSong, playing: !prevState.currentSong.playing } }))
  };
  
  const format = (time) => `${Math.floor(time / 60)}:${('0'+Math.floor(time % 60)).slice(-2)}`

  const songRangeHandler = (e) => {
    audio.current.currentTime = e.target.value
    setState({...state, currentSong: {...state.currentSong, currentTime: e.target.value}}) 
  }

  const volumeUpdateHandler = (e) => {
    setState(prevState => ({
      ...prevState,
      currentSong: {
        ...prevState.currentSong,
        volume: e.target.value
      }
    }))

    setVolume(({muteState: false}))
    
  }

  const changeSong = (action) => {
    let currentSongIndex = songs.findIndex(song => song.id === state.currentSong.id)
    const next = currentSongIndex + 1;
    const prev = currentSongIndex - 1;
    const newSong = {
      name:
        (action === FORWARD && songs[next > songs.length - 1 ? currentSongIndex : next].name) ||
        (action === BACKWARD && songs[prev < 0 ? 0 : prev].name),
      id:
        (action === FORWARD && songs[next > songs.length - 1 ? currentSongIndex : next].id) ||
        (action === BACKWARD && songs[prev < 0 ? 0 : prev].id),
      artist:
        (action === FORWARD && songs[next > songs.length - 1 ? currentSongIndex : next].artist) ||
        (action === BACKWARD && songs[prev < 0 ? 0 : prev].artist),
      cover:
        (action === FORWARD && songs[next > songs.length - 1 ? currentSongIndex : next].cover) ||
        (action === BACKWARD && songs[prev < 0 ? 0 : prev].cover),
      audio:
        (action === FORWARD && songs[next > songs.length - 1 ? currentSongIndex : next].audio) ||
        (action === BACKWARD && songs[prev < 0 ? 0 : prev].audio),
    };
    setState((prevState) => ({
      ...prevState,
      currentSong: {
        ...prevState.currentSong,
        ...newSong,
      },
    })); 
  }

  const muteVolumeToggler = () => setVolume(prevState => ({muteState: !prevState.muteState}))

  const loopSongToggler = () => setState(prevState => ({...prevState, loop: !prevState.loop}))

  

  useEffect(() => {
    audio.current ? (audio.current.volume = state.currentSong.volume) : null;

    if (state.currentSong.playing) {
      audio.current.play();
    } else {
      audio.current && audio.current.pause();
    }
  }, [audio, state.currentSong])

  return (
    <div className="player">
      <div className="col mx-auto d-flex align-items-center justify-content-center mb-5 pt-2 rounded">
        <div className="col-3 col-md-2 text-md-center">
          {format(state.currentSong.currentTime)}/
          {state.currentSong.durationTime
            ? format(state.currentSong.durationTime)
            : "0:00"}
        </div>
        <div className="col-6 col-md-8 d-flex align-items-center">
          <input
            type="range"
            className={classes.audioRange}
            value={state.currentSong.currentTime}
            max={state.currentSong.durationTime || 0}
            min={0}
            step={0.1}
            onChange={songRangeHandler}
          />
        </div>
        <div className="col-3 col-md-2 d-flex justify-content-center d-md-block">
          <div
            className={state.loop ? classes.activeButton : classes.button}
            onClick={loopSongToggler}
          >
            <div className={classes.loop}></div>
          </div>
        </div>
      </div>
      <div className="controls row">
        <div className="col-8 col-md-6 ml-auto mr-auto mr-md-0 d-flex align-items-center justify-content-around">
          <button className={classes.button} onClick={() => changeSong(BACKWARD)}>
            <FaStepBackward />
          </button>
          <button
            className={
              state.currentSong.playing ? classes.button : classes.activeButton
            }
            onClick={toggleAudioPlaying}
          >
            {state.currentSong.playing ? <FaPause /> : <FaPlay />}
          </button>
          <button className={classes.button} onClick={() => changeSong(FORWARD)}>
            <FaStepForward />
          </button>
        </div>
        <div
          className={`col-5 mx-auto mx-md-0 col-md-3 mt-5 mt-md-0 d-flex align-items-center justify-content-center justify-content-md-start ${classes.volumeContainer}`}
        >
          <button
            className={volume.muteState ? classes.activeButton : classes.button}
            onClick={muteVolumeToggler}
          >
            {volume.muteState ? (
              <FaVolumeMute size="1.4rem" />
            ) : (
              <FaVolumeUp size="1.4rem" />
            )}
          </button>
          <input
            type="range"
            className={classes.audioRange}
            min={0}
            max={1}
            step={0.01}
            value={
              volume.muteState
                ? "0"
                : audio.current
                ? audio.current.volume
                : "1"
            }
            onChange={volumeUpdateHandler}
          />
        </div>
      </div>
      <audio
        src={state.currentSong.audio}
        ref={audio}
        onTimeUpdate={audioHandler}
        onLoadedMetadata={audioHandler}
        muted={volume.muteState}
        loop={state.loop}
      ></audio>
    </div>
  );
}


export default Player 