import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/solid";

export default function DetailedCard({
  img,
  title,
  short_description,
  author,
  cuisine,
  likes,
}) {
  return (
    <div className="flex mb-2 py-7 px-2 pr-4 border-b border-gray-500 cursor-pointer hover:opacity-80 hover:shadow-lg dark:hover:shadow-xl dark:hover:bg-gray-600 transition duration-200 ease-out first:border-top rounded-md">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-gray-500">
            {" "}
            Cuisine:{" "}
            <span className="text-gray-700 dark:text-gray-300">
              {cuisine}
            </span>{" "}
          </p>

          <HeartIcon className="h-7 cursor-pointer hover:text-blue-500  dark:text-gray-20 dark:hover:text-newblue" />
        </div>
        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm flex-grow">{short_description}</p>

        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <HeartIcon className="h-5 text-blue-500 dark:text-newblue" />
            {likes}
            {/* add rating field in recipes table */}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl hover:underline">
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
