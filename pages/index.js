import { useContext } from 'react';
import HtmlHead from '../components/HtmlHead/HtmlHead';
import Song from '../components/Song/Song';
import Player from '../components/Player/Player';
import LIbrary from '../components/Library/LIbrary';
import Nav from '../components/Nav/Nav';
import { Context } from '../Hoc/GlobState/GlobState';


export default function Home () {

  const [state, ] = useContext(Context) 
  return (
    <div>
      <HtmlHead>
        <title>Waves</title>
        <link
          rel="shortcut icon"
          href="/icons/favicon.ico"
          type="image/x-icon"
        />
      </HtmlHead>
      <LIbrary />
      <div style={{marginLeft: state.libraryStatus ? '20%' : '', transition: '.3s'}}>
        <Nav />
        <div className="col-md-8 mx-auto mb-5">
          <Song />
          <Player/>
      </div>
      </div>
    </div>
  );
}

