import { withBlitz } from "src/blitz-client"
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default  withBlitz(MyApp)
