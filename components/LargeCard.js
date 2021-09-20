import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative my-16 cursor-pointer text-white">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-1/3 left-12">
        <h3 className="text-4xl mb-3 w-64 ">{title}</h3>
        <p>{description}</p>
        <div className="my-5">
          <Button label={buttonText} buttonType="contain" />
        </div>
      </div>
    </section>
  );
}
