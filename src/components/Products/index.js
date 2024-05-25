'use client';

import React from 'react';
// import { Products } from "@/data/products";
// import ProductCard from "@/components/ProductCard";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Products } from '../../data/products';
import ProductCard from '../ProductCard';

const ProductIndex = () => {
    const pathname = usePathname();
    return (
        <div>
           <div className="trending-text-below">Top view in this weeks</div>
        <div className="grid lg:grid-cols-4  md:grid-cols-3  grid-cols-2 gap-8 my-8">
          {Products.slice(0, 16).map((item, i) => (
        						<Link
                    key={item.id}
                    className={`link ${
                      pathname === '/' ? 'active' : ''
                    }`}
                    href={`/products/${item.id}`}
                  >                
                <ProductCard key={i} {...item} index={i} />
                </Link>

          ))}
        </div>
        </div>
    );
};

export default ProductIndex;