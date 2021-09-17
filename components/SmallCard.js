import React from "react";
import Image from "next/image";

export default function SmallCard({ img, title, subtitle }) {
  return (
    <div className="flex w-auto items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <h3 className="text-gray-500">{subtitle}</h3>
      </div>
    </div>
  );
}
