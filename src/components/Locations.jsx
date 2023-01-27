import React from "react";
import Zoom from "react-reveal/Zoom";
import planet1 from "../assets/planet1.jpg";
import star1 from "../assets/star1.png";
import planets2 from "../assets/planets2.jpg";
import bhole from "../assets/bhole.jpg";
import planet3 from "../assets/planet3.jpg";

const Locations = () => {
  return (
    <div className="location-div">
      <Zoom cascade>
        <h1 className="h1-location">Witeness Beauty</h1>

        <div className="grid md:mt-36 lg:grid-cols-2">
          <div className="p-location">
            Our top rated locations are chosen buy both our users & team, will give
            you an experience like no other.
          </div>
          <div className="mt-[25%] md:mt-[25%] lg:mt-0 mx-[4%] md:mx-[16%] lg:mx-4">
            <img
              alt="planet"
              src={planet1}
              className="w-36 md:w-60 lg:w-80 rounded-lg skew-y-6 hover:z-50 hover:scale-125 duration-700"
            />
            <img
              alt="planet"
              src={planets2}
              className="w-36 md:w-60 lg:w-80 rounded-lg absolute top-2 translate-x-28 skew-y-6 -z-10 hover:z-50 hover:scale-125 duration-700"
            />
            <img
              alt="planet"
              src={bhole}
              className="w-36 md:w-60 lg:w-80 rounded-lg absolute top-2 translate-x-48 md:translate-x-40 skew-y-6 -z-20 hover:z-50 hover:scale-125 duration-700"
            />
            <img
              alt="planet"
              src={star1}
              className="w-36 md:w-60 lg:w-80 rounded-lg mt-4 md:mt-0  md:absolute top-2 translate-x-12 md:translate-x-52 skew-y-6 -z-30 hover:z-50 hover:scale-125 duration-700"
            />
            <img
              alt="planet"
              src={planet3}
              className="w-36 md:w-60 lg:w-80 rounded-lg mt-4 md:mt-0 absolute top-20 md:top-2 translate-x-[9.5rem] md:translate-x-72 skew-y-6 -z-40 hover:z-50 hover:scale-125 duration-700"
            />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Locations;

/* 
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
              <p className="font-Raleway py-4 ">Aquila- 6B</p>
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

*/
