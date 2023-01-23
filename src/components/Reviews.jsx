import React, { Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import Header from "./Header";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

const Reviews = () => {
  return (
    <Fragment>
      <div className="review-div">
        <Header />
        <Zoom cascade>
          <h1 className="h1-review">What our customers think</h1>

          <div className="review-inner-div">
            <div className="ml-4">
              <img
                src={user1}
                alt="a person"
                className="w-4[rem] h-[4rem] md:w-[6rem] md:h-[6rem] lg:w-[8rem] lg:h-[8rem] float-left"
              />
              <p className="italic inline text-xs lg:text-base">
                " Very smooth experience. I had heared about cosmosail but
                didn't knew they are this good "
              </p>
            </div>
            <div className="mt-32 ml-4 md:mt-48 md:ml-16 lg:mt-32 lg:ml-36">
              <img
                src={user2}
                alt="a person"
                className="w-4[rem] h-[4rem] md:w-[6rem] md:h-[6rem] lg:w-[8rem] lg:h-[8rem] float-left"
              />
              <p className="italic inline text-xs lg:text-base">
                " I was always fascinated by space and now i can't get enough of
                outer space travels "
              </p>
            </div>
            <div className="mt-32 ml-4 md:mt-48 md:ml-28 lg:mt-40 lg:ml-72">
              <img
                src={user3}
                alt="a person"
                className="w-4[rem] h-[4rem] md:w-[6rem] md:h-[6rem] lg:w-[8rem] lg:h-[8rem] float-left"
              />
              <p className="italic inline text-xs lg:text-base">
                " I don't want to live on this planet anymore "
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </Fragment>
  );
};

export default Reviews;
