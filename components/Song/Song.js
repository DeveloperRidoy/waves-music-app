import { useContext } from "react";
import { Context } from "../../Hoc/GlobState/GlobState";


const Song = () => {

  const [state,] = useContext(Context)

    return (
      <div className="song">
        <div className=" text-center">
          <img
            src={state.currentSong.cover}
            alt={state.currentSong.name || ''}
            className="img-fluid col-8 col-md-4 rounded-circle mb-4"
          />
          <h5 style={{fontWeight: 'bold'}}>{state.currentSong.name}</h5>
          <p className="text-dark">{state.currentSong.artist}</p>  
        </div>
      </div>
    );
}


export default Song