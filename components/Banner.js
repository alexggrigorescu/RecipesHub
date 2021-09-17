import React from "react";
import Image from "next/image";

import Button from "./Button";

import bannerImage from "../assets/heroImage.jpg";

export default function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[650px]">
      <Image src={bannerImage} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-2xl font-semibold text-white shadow-md">
          Searching for something new to delight your taste buds?
        </p>
        <div className="relative inline-block align-middle">
          <a href="/recipes">
            <Button label="Let's find you something" buttonType="contain" />
          </a>
        </div>
      </div>
    </div>
  );
}
