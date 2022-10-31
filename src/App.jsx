import { Fragment } from "react";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Why from "./components/Why";
import Spaceship from "./components/Spaceship";
import Spacesuit from "./components/Spacesuit";
import Locations from "./components/Locations";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
      <Home />
      <About />
      <Why />
      <Spaceship />
      <Spacesuit />
      <Locations />
      <Reviews />
      <Contact />
    </Fragment>
  );
}

export default App;
