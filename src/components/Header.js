import {  useAppContext } from "../contexts/AppContext"
import Footer from "./Navigation";

export default function Header(props){

  const context = useAppContext();

  return (
    <header className="App-header">
        <img src={context.planet.image} className="App-logo" alt="logo" />
        <h1>{context.planet.name}</h1>
        <p className="container">{context.planet.description}</p>
        <a
          className="App-link"
          href={context.planet.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See {context.planet.name}
        </a>
        <br />
        <Footer />
    </header>

  )
}