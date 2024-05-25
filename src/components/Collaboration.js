import Image from 'next/image';
import React from 'react';

const Collaboration = () => {
    return (
        <div className="flex w-full my-5 gap-5">
        <div className="relative h-16 w-16">
          <Image
            src="/Gpay.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-16 w-16">
          <Image
            src="/Applepay.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-16 w-16">
          <Image
            src="/Visapay.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-16 w-16">
          <Image
            src="/Masterpay.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-16 w-16">
          <Image
            src="/Masterpay2.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative h-16 w-16">
          <Image
            src="/shopifypay.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-16 w-16">
          <Image
            src="/Klarnapay.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
          <div className="relative h-16 w-16">
            <Image
              src="/Palpay.svg"
              alt="openbed"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="relative h-16 w-16">
          <Image
            src="/Xpresspay.svg"
            alt="openbed"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    );
};

export default Collaboration;