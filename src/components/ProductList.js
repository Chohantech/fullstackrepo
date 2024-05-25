"use client";
import { Mattresses, Products, Swatches, Accessories, Sales } from "@/data/products";
import React, { useEffect, useState, useRef, Suspense } from "react";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProductList = ({ selectedGrid, setSelectedGrid, pageType }) => {
  const listRef = useRef();
  const isMattresses = pageType === "Mattress";
  const pathname = usePathname();


  //pagination
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // const currentProducts = isMattresses
  //   ? Mattresses.slice(itemOffset, endOffset)
  //   : Products.slice(itemOffset, endOffset);
  let currentProducts;

// Determine the current products based on pageType
if (pageType === "Mattress") {
  currentProducts = Mattresses.slice(itemOffset, endOffset);
  // Additional logic for Mattress pageType can go here
} else if (pageType === "Swatches") {
  currentProducts = Swatches.slice(itemOffset, endOffset);
  // Additional logic for Swatches pageType can go here
} else if (pageType === "Sales") {
  currentProducts = Sales.slice(itemOffset, endOffset);
  // Additional logic for Sales pageType can go here
} else if (pageType === "Accessories") {
  currentProducts = Accessories.slice(itemOffset, endOffset);
  // Additional logic for Accessories pageType can go here
} else {
  currentProducts = Products.slice(itemOffset, endOffset);
}

function getSalesOrMattressRoute(pageType) {
  switch (pageType) {
    case "Sales":
      return "/sales/";
    case "Accessories":
      return "/accessories/";
    case "Swatches":
      return "/order-swatches/";
    case "Mattress":
      return "/mattresses/";
    default:
      console.warn(`Unsupported pageType: ${pageType}. Defaulting to root.`);
      return "/mattresses/"; // Default to the root route
  }
}

const pageCount = Math.ceil(Products.length / itemsPerPage);

// const buttonColor = renderMapping[pageType]?.buttonColor || "text-main";

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Products.length;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setItemOffset(newOffset);
  };
  return (
    <div className="">
      <section
        id="Projects"
        className={` ${
          selectedGrid === 2 ? "custom-grid" : "grid grid-cols-" + selectedGrid
        } ${
          selectedGrid !== 0 ? "justify-items-center justify-center gap-6 " : ""
        }mt-10 mb-5  `}
      >
        {currentProducts.map((product, i) => (
            <Link
            key={product.id}
            className={`link ${
              pathname === '/' ? 'active' : ''
            }`}
            href={`${getSalesOrMattressRoute(pageType)}/${product.id}`}
            >        
            <ProductCard
              pageType={pageType}
              {...product}
              selectedGrid={selectedGrid}
              key={i}
              index={i}
              // imageUrl={product.image}
            />
            
            </Link>
        ))}
      </section>
      <hr className="text-primary bg" />
      <div className="flex justify-center mt-3">
        <ReactPaginate
          pageLinkClassName="text-primary"
          activeClassName="text-red-400"
          activeLinkClassName="text-red-400"
          nextLinkClassName="text-primary"
          previousClassName="text-primary"
          className="flex gap-5"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default ProductList;
