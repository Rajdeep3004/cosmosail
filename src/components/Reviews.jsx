import React, { Fragment } from "react";
import { Slide } from "react-reveal";

const Reviews = () => {
  return (
    <Fragment>
      <div className="review-div">
        <Slide right>
          {" "}
          <div className="place-self-center text-xs md:text-base lg:text-xl">
            " fascinated "
          </div>
        </Slide>
        <Slide left>
          <div className="pt-8 font-ElMessiri text-sm md:text-xl lg:text-5xl bg-black text-white">
            What
          </div>
        </Slide>
        <Slide top>
          {" "}
          <div className="pt-16 justify-self-center text-xs md:text-base lg:text-xl">
            " they are really good "
          </div>
        </Slide>
        <div className="pt-48 font-ElMessiri text-sm md:text-xl lg:text-5xl bg-black text-white">
          <Slide right>Our</Slide>
        </div>
        <Slide bottom>
          {" "}
          <div className="pt-64 font-ElMessiri text-sm md:text-xl lg:text-5xl bg-black text-white">
            Customers
          </div>
        </Slide>
        <Slide left>
          {" "}
          <div className="justify-self-center place-self-center text-xs md:text-base lg:text-xl">
            " the universe humbles you "
          </div>
        </Slide>
        <Slide bottom>
          {" "}
          <div className=" font-ElMessiri text-sm md:text-xl lg:text-5xl bg-black text-white">
            Think
          </div>
        </Slide>
        <Slide top>
          <div className="justify-self-center text-xs md:text-base lg:text-xl">
            " i am leaving this planet "
          </div>
        </Slide>
      </div>
    </Fragment>
  );
};

export default Reviews;
