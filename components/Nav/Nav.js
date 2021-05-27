import { FaMusic } from "react-icons/fa";
import classes from './Nav.module.scss';
import { useContext } from 'react'
import { Context } from "../../Hoc/GlobState/GlobState";


export default function Nav () {
    
    const [, setState] = useContext(Context)

    const toggleLibrary = () => setState(prevState => ({...prevState, libraryStatus: !prevState.libraryStatus}))

    return (
      <div className={classes.Nav}>
        <div className="row p-3 justify-content-around text-center">
          <div className="col h3" style={{fontFamily: 'Alegreya, serif'}}>Waves</div>
          <div className="col h5">
            <button className="btn btn-primary" onClick={toggleLibrary} style={{zIndex: '1', position: 'fixed'}}>
              Library <FaMusic />
            </button>
          </div>
        </div>
      </div>
    );
}
