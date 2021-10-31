import React from "react"
import "bulma"
import "../App.css"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
//import TopNav from "../components/Navbar"

const Home = () => {
  //const [projectData, setProjectData] = React.useState<any>(undefined);

  return (
    <div>
      <Helmet>
        <title>Fuego Creators</title>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)"></meta>
      </Helmet>

      {/* <TopNav /> */}

      <div className={"container introText"}>
        
        <br />
        <br />

        <h1 className="is-1 title">
          <figure className="image" style={{ padding: "100px", width: "60%", display: "inline-block", verticalAlign: "middle" }}>
            <img src="/FuegoCreatorsWhite.png" alt="Logo" />
          </figure>
        </h1>

        <h2 className="title" >The future home for musicans, writers, artists, and all creators<br />to collaborate and share their work with like-minded individuals. </h2>

        <br />

        <a href="https://discord.gg/A4MrDbyWw8" className="mt-1 button is-large home-button">
          Join the Discord
        </a>
        <a href="https://fuegocreators.substack.com/" className="mt-1 button is-large home-button">
          View Newsletter
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default Home
