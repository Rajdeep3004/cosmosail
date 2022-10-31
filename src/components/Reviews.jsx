import React, { Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import Header from "./Header";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const Reviews = () => {
  return (
    <Fragment>
      <div className="review-div ">
        {" "}
        <Header />
        <Zoom cascade>
          <h1 className="h1-review">What our customers think</h1>

          <div className="review-grid-div">
            <div className="review-inner-grid">
              <img
                src={user1}
                alt="a person"
                className="rounded-full w-[5rem] h-[5rem] mx-auto"
              />
              <p className="py-4 italic text-sm lg:text-base">
                " Very smooth experience. I had heared about cosmosail but
                didn't knew they are this good "
              </p>
            </div>
            <div className="review-inner-grid pt-4 md:pt-0">
              <img
                src={user2}
                alt="a person"
                className="rounded-full w-[5rem] h-[5rem] mx-auto"
              />
              <p className="py-4 italic text-sm lg:text-base">
                " I was always fascinated by space and now i can't get enough of
                outer space travels "
              </p>
            </div>
            <div className="px-8 md:px-12 pt-4 md:pt-0">
              <img
                src={user3}
                alt="a person"
                className="rounded-full w-[5rem] h-[5rem] mx-auto"
              />{" "}
              <p className="py-4 italic text-sm lg:text-base">
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
