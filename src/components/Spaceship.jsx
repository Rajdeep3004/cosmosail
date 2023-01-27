import React, { Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import largership from "../assets/largership.jpg";
import smallership from "../assets/smallership.jpg";

const Spaceship = () => {
  return (
    <Fragment>
      <div className="spaceship-div">
        <Zoom>
          <h1 className="h1-spaceship">Best Rides In Business</h1>
          <p className="p">
            Our ships are equipped with all necessary features for space travels
            such as systems to live and breathe, proper propulsion, the ability
            to hold off the heat, radiation protection, constant communication
            and navigation.
          </p>
        </Zoom>
      </div>

      <div className="child-div-spaceship">
        {" "}
        <Zoom cascade>
          <h1 className="child-div-spaceship-h1">go with a team..</h1>
        </Zoom>{" "}
        <Fade left>
          <div>
            <img
              alt="large spaceship"
              className="w-full h-screen"
              src={largership}
            />
          </div>
        </Fade>
      </div>
      <div className="child-div-spaceship">
        <Fade right>
          <div>
            <img
              alt="smaller spaceship"
              className="w-full h-screen"
              src={smallership}
            />
          </div>
        </Fade>
        <Zoom cascade>
          <h1 className="child-div-spaceship-h1">or go solo !!</h1>
        </Zoom>
      </div>
    </Fragment>
  );
};

export default Spaceship;
