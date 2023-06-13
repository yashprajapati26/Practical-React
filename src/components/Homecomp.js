import React from "react";

function Homecomp() {
  return (
    <div className="md:grid grid-cols-3 md:mx-20 my-5">
      <div className="col-span-2 mt-10">
        <h1 className="font-bold text-lg p-2">Help and support the creative community</h1>
        <h1 className="text-6xl font-extrabold p-2">We are</h1>
        <h1 className="text-6xl font-extrabold p-2">Creative</h1>
        <p className="font-light p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="">
        <img
          className="w-fit rounded-md"
          src="https://websitedemos.net/creative-blog-02/wp-content/uploads/sites/916/2022/03/home-hero-img.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Homecomp;
