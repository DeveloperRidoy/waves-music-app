import classes from './Library.module.scss'
import LibrarySong from './LibrarySong/LIbrarySong';
import songs from '../../utlls/songs/songs';
import { useContext } from 'react';
import { Context } from '../../Hoc/GlobState/GlobState';

export default function Libarary () {

    const [state,] = useContext(Context);


    return (
        <div className={`col-12 col-md-5 col-lg-3 ${classes.Library} ${state.libraryStatus ? classes.active : classes.disabled}`}>
            <h5 className="px-4 pt-3">Library</h5>
            {songs.map(song => <LibrarySong info={song} key={song.id}/>)}
        </div>
    )
}

