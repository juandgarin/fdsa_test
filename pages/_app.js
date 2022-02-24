import '../styles/globals.css'
import 'bootswatch/dist/superhero/bootstrap.min.css';

import Wrapper from '../src/components/Wrapper.js';

function MyApp({ Component, pageProps }) {

  return <Wrapper>
    <Component {...pageProps} />
  </Wrapper>

}

export default MyApp
