/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ProductCard = ({
  name,
  price,
  image,
  hoverImage,
  discount,
  size,
  selectedGrid,
  index,
  pageType,
  type,
  id,
  category,
  swatchesDiscount,
  slashedPrice,
  salesDiscount,
}) => {
  const imageRef = useRef();
  const icon1Ref = useRef();
  const icon2Ref = useRef();

  const renderMapping = {
    Mattress: {
      imageSrcs: ["/bed-factory-metal-beds.jpg", "/SampleProduct.jpg"],
      customizeText: "Customize your bed",
      buttonColor: "bg-black", // Button color for Mattress
    },
    Swatches: {
      imageSrcs: ["/bed_img2.jpg"],
      customizeText: "Select your swatches",
      buttonColor: "bg-gray-500", // Button color for Swatches
    },
    Sales: {
      imageSrcs: ["/sales-accessory-image.jpg"],
      customizeText: "Explore our sales accessories",
      buttonColor: "bg-red-600", // Button color for Sales Accessories
    },
    Accessories: {
      imageSrcs: [""],
      customizeText: "Discover our clothing range",
      buttonColor: "bg-purple-500", // Button color for Clothing
    },
  };

  const {
    imageSrcs = [],
    customizeText,
    buttonColor,
  } = renderMapping[pageType] || {};

  const addHoverImage = () => {
    if (icon1Ref.current && icon2Ref.current && imageRef.current) {
      icon1Ref.current.style.display = "inline-block";
      icon2Ref.current.style.display = "inline-block";
      imageRef.current.src = hoverImage || "/SampleProduct2.jpg";
    }
  };

  const removeHoverImage = () => {
    if (icon1Ref.current && icon2Ref.current && imageRef.current) {
      icon1Ref.current.style.display = "none";
      icon2Ref.current.style.display = "none";
      imageRef.current.src = image || imageSrcs[0] || "/SampleProduct.jpg";
    }
  };

  useEffect(() => {
    const currentImageRef = imageRef.current;
    if (currentImageRef && !customizeText) {
      currentImageRef.addEventListener("mouseover", addHoverImage);
      currentImageRef.addEventListener("mouseleave", removeHoverImage);
      return () => {
        currentImageRef.removeEventListener("mouseover", addHoverImage);
        currentImageRef.removeEventListener("mouseleave", removeHoverImage);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customizeText, hoverImage, image, imageSrcs]);

  const displaySlashedPrice = slashedPrice || "£0.00";
  const displaySlashedDiscount = salesDiscount || "£0.00";
  const getButtonText = (customizeText) => {
    return customizeText || "Customize your bed";
  };

  return selectedGrid === 0 ? (
    // single layout
    <>
      {pageType === "Swatches" && (
        <div className="flex x  w-full justify-center items-center my-2">
          <hr className="bg-black h-0.5 w-full" />
          <h1 className="text-2xl mx-3 flex items-center justify-center w-full text-center text-underline font-semibold">
            {type}
          </h1>
          <hr className="bg-black h-0.5 w-full " />
        </div>
      )}

      <div
        className={`flex p-[20px] md:gap-x-4  border border-primary ${
          index >= 0 && index < 9 ? "border-b-0" : ""
        }`}
      >
        {pageType === "Swatches" && (
          <div className="flex flex-row  w-full justify-between items-center gap-2">
            <div className="flex gap-8 items-center justify-start flex-row">
              <Image
                src={image}
                alt="Swatch"
                width={180}
                height={230}
                className="object-cover"
              />
              <div className="flex flex-col hover:text-main  items-start justify-start gap-1">
                <span className="text-sm font-medium text-gray-400">
                  {category}
                </span>
                <p className="text-black text-base font-semibold">{name}</p>
                <span className="text-sm font-medium text-gray-400">
                  {swatchesDiscount}
                </span>
              </div>
            </div>
            <div className=" basis-[20%] flex items-end justify-end ">
              <button className="byb-badge cursor-pointer">Add To Cart</button>
            </div>
          </div>
        )}

        {/* sales  */}

        {pageType === "Sales" && (
          <div className=" w-full flex flex-col md:flex-row justify-between items-center">
            <div className="overflow-hidden  relative">
              <span
                ref={icon1Ref}
                className="absolute left-5 top-2 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-regular fa-heart"></i>
              </span>
              <span
                ref={icon2Ref}
                className="absolute left-5 top-8 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-solid fa-code-compare"></i>
              </span>
              {/* advert */}

              <div className="absolute left-0 top-4 h-10 w-fit px-6 bg-red-600  z-10 flex items-center justify-center text-white">
                I&apos;m in the Sale!
              </div>

              <img
                src={image || imageSrcs[0] || "/SampleProduct.jpg"}
                ref={imageRef}
                alt="Product"
                className="object-cover w-[320px] h-[180px] ease-in duration-1000 hover:scale-125"
              />
            </div>

            <div className="text-base font-medium ">{name}</div>

            <div className="px-4 basis-[25%]  cursor-pointer  py-3">
              <span className="text-gray-400 mr-3 text-xs hover:text-primary duration-500">
                From
              </span>
              <span className="text-red-600 text-lg font-semibold  block capitalize ">
                {price}
              </span>
              <div className="flex items-center">
                <>
                  <p className="text-sm text-gray-400 line-through me-2">
                    {displaySlashedPrice}
                  </p>

                  <p className="text-sm  text-black me-2"> Save</p>
                </>
                <p className="text-sm  text-black">{displaySlashedDiscount}</p>
              </div>
            </div>
          </div>
        )}

        {/* accessories */}

        {pageType === "Accessories" && (
          <div className=" w-full flex flex-col md:flex-row justify-between items-center">
            <div className="overflow-hidden  relative">
              <span
                ref={icon1Ref}
                className="absolute left-5 top-2 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-regular fa-heart"></i>
              </span>
              <span
                ref={icon2Ref}
                className="absolute left-5 top-8 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-solid fa-code-compare"></i>
              </span>
              {/* advert */}
              {discount && discount.length ? (
                <div className="absolute right-5 top-8 h-12 w-12 bg-primary rounded-full z-10 flex items-center justify-center text-white">
                  {discount}
                </div>
              ) : null}
              <img
                src={image || imageSrcs[0] || "/SampleProduct.jpg"}
                ref={imageRef}
                alt="Product"
                className="object-cover w-[280px] h-[220px] ease-in duration-1000 hover:scale-125"
              />
            </div>

            <div className="text-base font-medium ">{name}</div>

            <div className="px-4 basis-[25%]  cursor-pointer  py-3">
              <span className="text-gray-400 mr-3 text-xs hover:text-primary duration-500">
                From
              </span>
              <span className="text-red-600 text-lg font-semibold  block capitalize ">
                {price}
              </span>
              <div className="flex items-center">
                <>
                  <p className="text-sm text-gray-400 line-through me-2">
                    {displaySlashedPrice}
                  </p>

                  <p className="text-sm  text-black me-2"> Save</p>
                </>
                <p className="text-sm  text-black">{displaySlashedDiscount}</p>
              </div>
            </div>
          </div>
        )}

        {/* default style for all single card */}

        {!(
          pageType === "Accessories" ||
          pageType === "Sales" ||
          pageType === "Swatches"
        ) && (
          <div className="flex items-center [@media(max-width:768px)]:flex-col   w-full gap-6">
            <div className="overflow-hidden rounded-t-xl relative">
              <span
                ref={icon1Ref}
                className="absolute left-5 top-2 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-regular fa-heart"></i>
              </span>
              <span
                ref={icon2Ref}
                className="absolute left-5 top-8 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-solid fa-code-compare"></i>
              </span>
              {discount && discount.length ? (
                <div className="absolute right-5 top-8 h-12 w-12 bg-primary rounded-full z-10 flex items-center justify-center text-white">
                  {discount}
                </div>
              ) : null}
              <img
                src={image || imageSrcs[0] || "/SampleProduct.jpg"}
                ref={imageRef}
                alt="Product"
                className="object-cover rounded-t-xl w-[250px] ease-in duration-1000 hover:scale-125"
              />
            </div>
            <div>
              <div className=" shadow-md border p-2 rounded-lg flex place-items-end  flex-col md:flex-row md:w-[150%]">
                <div className="px-4 w-full py-3">
                  <span className="text-gray-400 mr-3 text-xs hover:text-primary duration-500">
                    {category}
                  </span>
                  <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">
                    {name}
                  </span>
                  <div className="flex items-center">
                    {discount && discount.length ? (
                      <>
                        <del>
                          <p className="text-sm text-gray-400 cursor-auto me-2">
                            {price}
                          </p>
                        </del>
                        <p className="text-sm cursor-auto text-red-600">
                          {price}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm cursor-auto text-gray-400">
                        {price}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-center w-full pt-3">
                  <a
                    className={`byb-badge cursor-pointer ${buttonColor}`}
                    onClick={() => console.log("Button clicked")}
                  >
                    <span>{getButtonText(customizeText)}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    // grid layout
    <>
      <>
        {!(pageType === "Swatches") && (
          <div className="w-full shadow">
            <div className="overflow-hidden w-full relative">
              <span
                ref={icon1Ref}
                className="absolute left-5 top-2 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-regular fa-heart"></i>
              </span>
              <span
                ref={icon2Ref}
                className="absolute left-5 top-8 text-white hidden z-10"
              >
                <i className="font-extralight fa fa-solid fa-code-compare"></i>
              </span>
              {discount && discount.length ? (
                <div className="absolute right-5 top-8 h-12 w-12 bg-primary rounded-full z-10 flex items-center justify-center text-white">
                  {discount}
                </div>
              ) : null}
              <img
                src={image || imageSrcs[0] || "/SampleProduct.jpg"}
                ref={imageRef}
                alt="Product"
                className={`object-cover rounded-t-xl ease-in duration-1000 hover:scale-125 ${
                  pageType === "Accessories" || pageType === "Sales"
                    ? " h-[200px] md:h-[300px] min-w-[300px] w-full"
                    : ""
                }`}
              />
            </div>
            {/* <div className="text-center pt-3">
            {customizeText && (
              <a className={`byb-badge cursor-pointer ${buttonColor}`}>
                <span>{customizeText}</span>
              </a>
            )}
          </div> */}
            <div className="text-center w-full pt-3">
              <a
                className={`byb-badge cursor-pointer ${buttonColor}`}
                onClick={() => console.log("Button clicked")}
              >
                <span>{getButtonText(customizeText)}</span>
              </a>
            </div>
            {/* Accessories */}

            {(pageType === "Accessories" || pageType === "Sales") && (
              <div className="px-4  basis-[25%]  cursor-pointer  py-3">
                <span className="text-gray-400 mr-3 text-xs hover:text-primary duration-500">
                  From
                </span>
                <span className="text-red-600 text-lg font-semibold  block capitalize ">
                  {price}
                </span>
                <div className="flex items-center">
                  <>
                    <p className="text-sm text-gray-400 line-through me-2">
                      {displaySlashedPrice}
                    </p>

                    <p className="text-sm  text-black me-2"> Save</p>
                  </>
                  <p className="text-sm  text-black">
                    {displaySlashedDiscount}
                  </p>
                </div>
              </div>
            )}

            {/* doesnt show on this pagetype */}

            {!(pageType === "Accessories" || pageType === "Sales") && (
              <div className="px-4 py-3">
                <span className="text-gray-400 mr-3 text-xs hover:text-primary duration-500">
                  {category}
                </span>
                <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">
                  {name}
                </span>
                <div className="flex items-center">
                  {discount && discount.length ? (
                    <>
                      <del>
                        <p className="text-sm text-gray-400 cursor-auto me-2">
                          {price}
                        </p>
                      </del>
                      <p className="text-sm cursor-auto text-red-600">
                        {price}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm cursor-auto text-gray-400">{price}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* swatches */}

        <>
          {pageType === "Swatches" && (
            <div className="grid  w-full">
            {/* <div className="flex flex-col  w-full justify-center items-center my-2">
              <hr className="bg-black h-0.5 w-full" />
              <h1 className="text-2xl mx-3 flex items-center justify-center w-full text-center text-underline font-semibold">
                {type}
              </h1>
              <hr className="bg-black h-0.5 w-full " />
            </div>
                        <div
                        className={`flex p-[20px] md:gap-x-4  border border-primary ${
                          index >= 0 && index < 9 ? "border-b-0" : ""
                        }`}
                      >
                        <div className="min-w-full min-h-full bg-white shadow-md rounded-xl hover:shadow-xl overflow-hidden">
                          <div className="overflow-hidden relative">
                            <span
                              ref={icon1Ref}
                              className="absolute left-5 top-2 text-white hidden z-10"
                            >
                              <i className="font-extralight fa fa-regular fa-heart"></i>
                            </span>
                            <span
                              ref={icon2Ref}
                              className="absolute left-5 top-8 text-white hidden z-10"
                            >
                              <i className="font-extralight fa fa-solid fa-code-compare"></i>
                            </span>
                            {discount && discount.length ? (
                              <div className="absolute right-5 top-8 h-12 w-12 bg-primary rounded-full z-10 flex items-center justify-center text-white">
                                {discount}
                              </div>
                            ) : null}
                            <img
                              src={image || imageSrcs[0] || "/SampleProduct.jpg"}
                              ref={imageRef}
                              alt="Product"
                              className="object-cover rounded-t-xl ease-in duration-1000 hover:scale-125"
                            />
                          </div>
          
                          <div className="px-4 py-3">
                            <span className="text-gray-400 mr-3 text-xs hover:text-primary duration-500">
                              {category}
                            </span>
                            <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">
                              {name}
                            </span>
                            <div className="flex items-center">
                              {discount && discount.length ? (
                                <>
                                  <del>
                                    <p className="text-sm text-gray-400 cursor-auto me-2">
                                      {price}
                                    </p>
                                  </del>
                                  <p className="text-sm cursor-auto text-red-600">
                                    {price}
                                  </p>
                                </>
                              ) : (
                                <p className="text-sm cursor-auto text-gray-400">
                                  {price}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div> */}
                      </div>
          )}

        </>
      </>
    </>
  );
};

export default ProductCard;
