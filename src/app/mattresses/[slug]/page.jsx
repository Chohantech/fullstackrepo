"use client";


// Import necessary hooks and utilities
import ProductbaseDropdown from "@/components/ProductbaseDropdown";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Collaboration from "@/components/Collaboration";
import ProductAddCart from "@/components/ProductAddCart";
import { Forklift, MapPin, ShoppingBasket } from "lucide-react";
import SocialMedia from "@/components/SocialMedia";
import DetailsMobile from "@/app/products/_components/details_mobile";

// Define the Page component to accept imageUrl as a prop
const Page = () => {
  const sizes = [
    {
      value: "Small Single 2ft6",
      label: "Small Single 2ft6",
      imageUrl: "/Double-small.png",
    },
    { value: "Single 3ft", label: "Single 3ft", imageUrl: "/Double-small.png" },
    {
      value: "Small Double 4ft",
      label: "Small Double 4ft",
      imageUrl: "/Double-small.png",
    },
    {
      value: "Double 4ft6",
      label: "King Size 5ft",
      imageUrl: "/Double-small.png",
    },
    {
      value: "Super King 6ft",
      label: "Super King 6ft",
      imageUrl: "/Double-small.png",
    },
  ];

  // Initialize state for the selected size
  const [selectedSize, setSelectedSize] = React.useState(sizes[0].label);

  // Function to handle size selection
  const handleSizeChange = (selectedValue) => {
    const selectedSizeObject = sizes.find((size) => size.value === selectedValue);
    if (selectedSizeObject) {
      setSelectedSize(selectedSizeObject.label);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  lg:mb-9 w-full min-h-screen">
      <section className="mx-auto pt-6 mb-12 lg:pt-0 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row  gap-6 lg:gap-12 items-start justify-center w-full">
        <Image
          src="/bed-factory-bed-frames.jpg"
          width={400}
          height={200}
          alt="Mattress"
          className="object-cover object-[90%, 40%] object-center w-full h-[300px] sm:w-1/2  lg:h-[600px] lg:w-1/3 xl:w-[60%]"
        />

        <div className="flex flex-col  items-start justify-start gap-2 w-full sm:w-1/2 lg:w-2/3 xl:w-3/4">
          <h1 className="text-base mb-5 font-semibold">
            Cool Gel 5000 Pocket Sprung Mattress
          </h1>
          <span className="flex flex-row gap-1 uppercase font-bold items-center justify-start">
            <p className="text-sm">SIZE:</p>
            <h3 className="text-sm">{selectedSize}</h3>
          </span>
          <Select onValueChange={handleSizeChange} className="w-full">
            <SelectTrigger className="w-full h-14 my-2">
              <SelectValue placeholder="Select a Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sizes.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    <div className="flex flex-row my-3 items-center justify-start w-full gap-3">
                      <Image
                        src={size.imageUrl}
                        alt={size.label}
                        width={30}
                        height={30}
                        className="mr-[10px]"
                      />

                      <h1 className="text-[#bb9369] text-sm font-medium">
                        {size.label}
                      </h1>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <h1 className="text-main text-xl mb-6 font-extrabold">£675.00</h1>
          <div className="w-full mb-4">
            <ProductAddCart />
          </div>

          <Card className="w-full flex flex-col items-center justify-center mt-4">
            <CardContent className="flex flex-col p-4 gap-2 lg:gap-4 items-start  justify-start lg:justify-center">
              <h1 className=" text-sm lg:text-lg">
                Free Shipping to <span className="font-bold">Nigeria</span>
              </h1>
              <p className="text-sm lg:text-base">
                Order within the next
                <span className="font-bold mx-1.5">
                  13 Hours 42 Minutes 44 Seconds
                </span>
                for dispatch today, and you&apos;ll receive your package between
                <span className="font-bold mx-1.5">May 29 and Jun 08</span>
              </p>
            </CardContent>
          </Card>

          <Card className="w-full flex flex-col items-center justify-center lg:justify-between  mt-4">
            <CardContent className="flex flex-row p-0 lg:flex-row  w-full gap-2 lg:gap-4 items-center justify-center lg:justify-between">

              <div className="flex flex-col items-center border-r-2 py-2 lg:p-4 gap-1 w-full">
                <ShoppingBasket size={40} className="text-main" />
                <p className=" text-sm lg:text-lg font-bold text-main">
                  Ordered
                </p>
                <span className="  text-xs lg:text-lg font-medium mx-1.5">May</span>
              </div>
              <div className="flex flex-col items-center border-r-2 py-2 lg:p-4 gap-1 w-full">
                <Forklift size={40} className="text-main" />
                <p className=" text-sm lg:text-lg font-bold text-main">
                  Order Ready
                </p>
                <span className="font-medium  text-xs lg:text-lg mx-1.5">May 25 - May 30</span>
              </div>
              <div className="flex flex-col items-center py-2 lg:p-4 gap-2 w-full">
                <MapPin size={40} className="text-main" />
                <p className=" text-sm lg:text-lg font-bold text-main">
                  Delivered
                </p>
                <span className="font-medium  text-xs lg:text-lg mx-1.5">May 29 - Jun 08</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-start justify-start gap-4 w-full">
            <div className="w-full">
              <Collaboration />
            </div>

            <h1 className="font-semibold text-base">Ask a Question</h1>
            <div className="flex flex-row gap-0.5 items-center justify-start">
              <p className="text-sm lg:text-base text-zinc-500">Availability</p>
              <h1 className="text-sm lg:text-base font-medium text-black">: In Stock</h1>
            </div>
         
              <h1 className="text-sm lg:text-base text-zinc-500">Categories
              
              <span className="text-sm lg:text-base font-medium text-center text-black">
                : all Cool Gel Collection Home page Mattress Mattresses
              </span>
              </h1>
         
            <div className="flex flex-row gap-0.5 items-center justify-start">
            <p className="text-sm lg:text-base text-zinc-500">Tags</p>
              <h1 className="text-sm lg:text-base font-medium text-black">: Cool Gel</h1>
            </div>
          </div>
          <SocialMedia />
        </div>
      </section>
      <ProductbaseDropdown />
      <div className="w-full">

      <DetailsMobile />
      </div>
    </div>
  );
};

export default Page;




