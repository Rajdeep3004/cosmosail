import React from "react";
import Zoom from "react-reveal/Zoom";
import planet1 from "../assets/planet1.jpg";
import star1 from "../assets/star1.png";
import planets2 from "../assets/planets2.jpg";
import bhole from "../assets/bhole.jpg";
import planet3 from "../assets/planet3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "./Header";

const Locations = () => {
  return (
    <div className="location-div">
      <Header/>
      <Zoom cascade>
        <h1 className="h1-location">Top rated locations</h1>

        <div className="grid justify-items-center">
          <Zoom>
          <Carousel
            className="max-w-[20rem] md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl"
            infiniteLoop
            autoPlay
            showArrows={false}
            showThumbs={false}
            stopOnHover={false}
            showStatus={false}
          >
            <div>
              <p className="font-Raleway py-4">Aquila- 6B</p>
              <img src={planet1} className="rounded" />
            </div>
            <div>
              <p className="font-Raleway py-4">Lupus- 5</p>
              <img src={planets2} className="rounded" />
            </div>
            <div>
              <p className="font-Raleway py-4">Vulpecula- Neutron Star</p>
              <img src={star1} className="rounded" />
            </div>
            <div>
              <p className="font-Raleway py-4">Sagittarius- x8</p>
              <img src={planet3} className="rounded" />
            </div>
            <div>
              <p className="font-Raleway py-4">Circinus- Black Hole</p>
              <img src={bhole} className="rounded" />
            </div>
          </Carousel></Zoom>
        </div>
      </Zoom>
    </div>
  );
};

export default Locations;
