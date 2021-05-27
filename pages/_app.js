import GlobState from '../Hoc/GlobState/GlobState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobState>
      <Component {...pageProps} />
    </GlobState>
  );
}

export default MyApp
