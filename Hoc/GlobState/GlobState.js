import { createContext, useState } from "react"
import songs from '../../utlls/songs/songs'

export const Context = createContext(null)

const GlobState = ({ children }) => {

    const initialState = {
      libraryStatus: false,
      currentSong: {
        playing: false,
        currentTime: 0,
        durationTime: 0,
        name: songs[0].name,
        artist: songs[0].artist,
        cover: songs[0].cover,
        audio: songs[0].audio,
        id: songs[0].id,
        volume: 1,
      },
      loop: false
    };

    const [state, setState] = useState(initialState);
    
    return (
        <Context.Provider value={[state,setState]}>
            {children}
        </Context.Provider>
    )
} 

export default GlobState  