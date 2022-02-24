import '../styles/globals.css'
import 'bootswatch/dist/superhero/bootstrap.min.css';

import Container from '../src/components/container.js';

function MyApp({ Component, pageProps }) {

  return <Container>
    <Component {...pageProps} />
  </Container>

}
export default MyApp
