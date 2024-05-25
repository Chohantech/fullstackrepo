import React from "react";
import ViewedProducts from "./cards/ViewedProducts";

const BaseProducts = () => {
  return (
    <div>
      <div className="text-center animate__animated animate__fadeIn text-[1.8rem] mt-10 font-semibold">
        You may also like
      </div>
      <div className="grid [@media(min-width:1300px)]:grid-cols-4 grid-cols-2 gap-2 md:gap-0 lg:grid-cols-3 items-start   py-2 justify-between">
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
      </div>

      <div className="text-center text-[1.8rem] mt-10 font-semibold">
        Recently viewed products
      </div>
      <div className="grid [@media(min-width:1300px)]:grid-cols-4 grid-cols-2 gap-2 md:gap-0 lg:grid-cols-3 items-start bg-green800  py-2 justify-between">
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
      </div>
    </div>
  );
};

export default BaseProducts;
