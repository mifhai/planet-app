import {  useAppContext } from "../contexts/AppContext"
import Footer from "./Navigation";

export default function Header(props){

  const context = useAppContext();

  return (
    <header className="App-header">
        <img src={context.planet.image} className="App-logo" alt="logo" />
        <h1>{context.planet.name}</h1>
        <a
          className="App-link"
          href="https://quran.nu.or.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lihat {context.planet.name}
        </a>
        <br />
        <Footer />
    </header>

  )
}