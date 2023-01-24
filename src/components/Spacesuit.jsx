import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import spacesuit from "../assets/spacesuit.png";
import Header from "./Header";

const Spacesuit = () => {
  return (
    <div className="spacesuit-div ">
      <Header />
      <Zoom cascade>
        <h1 className="h1-spacesuit ">All geared up</h1>
      </Zoom>
      <div className="grid md:grid-cols-2 overflow-scroll">
        <div>
          <Fade right>
            <img
              alt="spacesuit"
              className="h-[10rem] md:h-[30rem] 2xl:h-[50rem] mx-auto "
              src={spacesuit}
            />
          </Fade>
        </div>
        <div>
          <Fade left>
            <div className="p-spacesuit">
              <span className="block">
                The materials used in our suits are of supreme quality & consist
                different layers.
              </span>
              <span>
                <span className="block mt-4">-1/4</span> Protects from space
                dust. It is filled with gas to create proper pressure for the
                body and holds in the oxygen for breathing.
              </span>
              <span>
                <span className="block mt-4">--2/4</span>
                The ripstop liner is a tear-resistant layer. It consist
                communication systems.
              </span>
              <span>
                <span className="block mt-4">---3/4</span>
                This layer consist insulation and act like a thermos to help
                maintain the temperature inside the suit.
              </span>
              <span>
                <span className="block mt-4">----4/4</span>
                The outer layer reflects heat from the sunlight & is water
                resistant.
              </span>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Spacesuit;
