import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import spacesuit from "../assets/spacesuit.jpg";
import Header from "./Header";

const Spacesuit = () => {
  return (
    <div className="spacesuit-div ">
      <Header />
      <Zoom cascade>
        <h1 className="h1-spacesuit ">All geared up</h1>
      </Zoom>
      <Fade right>
        <img
          alt="spacesuit"
          className="w-1/2 lg:w-1/3 h-[15rem] md:h-[30rem] 2xl:h-[50rem] float-right mr-4 rounded-full"
          src={spacesuit}
        />
      </Fade>
      <Fade left>
        <p className="p-spacesuit">
          The materials used in our suits are of supreme quality & consist
          different layers. The layers perform different functions, from keeping
          oxygen within the spacesuit to protecting from space dust. Closest to
          the astronaut's skin, the cooling garment makes up the first three
          layers. On top of this garment is a layer that is filled with gas to
          create proper pressure for the body and holds in the oxygen for
          breathing. The ripstop liner is a tear-resistant layer. The next
          several layers are insulation and act like a thermos to help maintain
          the temperature inside the suit. The white outer layer reflects heat
          from the sunlight and is made of a fabric that blends three kinds of
          threads. One thread provides water resistance, another is the material
          used to make bullet-proof vests, and the third component is
          fire-resistant. The integrated communication system has speakers
          mounted inside the helmet area and multiple embedded voice-activated
          microphones that automatically pick up the wearer's voice.
        </p>
      </Fade>
    </div>
  );
};

export default Spacesuit;
