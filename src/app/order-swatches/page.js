"use client";
import Drawer from "@/components/ButtomDrawer";
import ProductFilter from "@/components/ProductFilter";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ProductGridSelector from "@/components/ProductGridSelector";
import ProductList from "@/components/ProductList";
import { ChevronDown, FilterIcon, SlidersHorizontal } from "lucide-react";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
const sortOptions = [
  "Featured",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];
const ProductListingPage = () => {
  const [selected, setSelected] = useState("Featured");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGrid, setSelectedGrid] = useState(2);
  const [openBottom, setOpenBottom] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="">
      <div>
        <div className="products-banner bg-gray-500 flex justify-center p-20">
          <div className="text-white text-xl">Order Swatches</div>
        </div>
        <div className="products-body container mt-5 py-5 ">
          <div className="header flex justify-between items-center">
            <Sheet>
              <SheetTrigger>
                <h1 className="flex flex-row gap-2 items-center justify-center  hover:text-main transition-opacity duration-300">
                  <SlidersHorizontal /> Filter
                </h1>
              </SheetTrigger>
              <SheetContent className="">
                <SheetHeader className="mt-10">
                  <SheetTitle className="flex flex-col gap-1.5 items-start justify-start">
                    <h1 className="text-xl">Availability</h1>{" "}
                    <hr className="h-0.5 rounded-full w-[20%] bg-black" />
                  </SheetTitle>
                  <SheetDescription className="pb-8">
                    <div className="my-2">
                      <div
                        className="flex flex-row gap-3 items-center justify-start "
                        onClick={() => setIsClicked(!isClicked)}
                      >
                        <Checkbox />
                        <h1
                          className={`text-base font-medium  tracking-wide${
                            isClicked ? "" : "text-main"
                          }`}
                        >
                          In Stock (29)
                        </h1>
                      </div>
                      <div
                        className="flex flex-row gap-3 items-center justify-start "
                        onClick={() => setIsClicked(!isClicked)}
                      >
                        <Checkbox />
                        <h1
                          className={`text-base font-medium tracking-wide${
                            isClicked ? "" : "text-main"
                          }`}
                        >
                          Out Of Stock(0)
                        </h1>
                      </div>
                    </div>

                    <Separator className="absolute left-0  mt-6 bg-main" />
                  </SheetDescription>
                  <SheetTitle className="flex flex-col my-4 gap-1.5 items-start justify-start">
                    <h1 className="text-xl">Price</h1>{" "}
                    <hr className="h-0.5 rounded-full w-[20%] bg-black" />
                  </SheetTitle>
                  <SheetDescription>
                    <div className="my-6">
                      <div className="flex flex-col gap-6 items-start justify-start ">
                        <Slider />
                        <h1 className="text-base text-black font-medium  tracking-wide">
                          Price: £333.00 — £675.00
                        </h1>
                      </div>
                    </div>
                    <button className="flex items-center justify-start py-1.5 px-4 text-sm font-semibold text-black border-2 border-black hover:bg-main hover:border-main rounded-2xl hover:text-white ">
                      FILTER
                    </button>
                    <Separator className="absolute left-0  my-4 bg-main" />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <ProductGridSelector
              selectedGrid={selectedGrid}
              setSelectedGrid={setSelectedGrid}
            />
            <div className="sort hidden md:block">
              <div className="relative  inline-block text-left">
                <div>
                  <button
                    onClick={handleClick}
                    type="button"
                    className="inline-flex min-w-56 w-full border border-primary  justify-between gap-x-1.5 rounded-3xl  bg-white px-3 py-2 text-sm  text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {selected}
                    <ChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
                  </button>
                </div>
                {isOpen ? (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    {sortOptions.map((item, i) => (
                      <div
                        key={i}
                        className="py-1 hover:bg-slate-300"
                        role="none"
                        onClick={() => {
                          setSelected(item);
                          setIsOpen(false);
                        }}
                      >
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <ul
              className="md:hidden menu "
              onClick={() => setOpenBottom(!openBottom)}
            >
              <li>
                <details open>
                  <summary style={{ padding: "3px" }}>Sort</summary>
                </details>
              </li>
            </ul>
          </div>
          <div className="list ">
            <ProductList
              pageType={"Swatches"}
              selectedGrid={selectedGrid}
              setSelectedGrid={setSelectedGrid}
            />
          </div>
          <div className="paginatiion bg-orange-400"></div>
        </div>
      </div>
      <Drawer
        open={openBottom}
        side="bottom"
        setOpen={setOpenBottom}
        sortOptions={sortOptions}
        setSelected={setSelected}
        selected={selected}
        className=""
      />
    </div>
  );
};

export default ProductListingPage;
