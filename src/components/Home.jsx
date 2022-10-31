import React, { Fragment } from "react";
import video from "../assets/video.mp4";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <Fragment>
      <div className="-z-10 sticky top-0 w-full h-screen">
        <video loop autoPlay muted className="h-full w-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Fade>
        <p className="p-home ">COSMOSAIL</p>
      </Fade>
    </Fragment>
  );
};

export default Home;
