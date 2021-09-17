import React from "react";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";

const recipes = [
  {
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80",
    title: "Title recipe 1",
  },
  {
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Title recipe 2",
  },
  {
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    title: "Title recipe 3",
  },
  {
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Title recipe 4",
  },
  {
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
    title: "Title recipe 5",
  },
  {
    img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Title recipe 6",
  },
  {
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    title: "Title recipe 7",
  },
];

export default function GridList({ cardSize }) {
  return listType(cardSize);
}

function listType(temp) {
  switch (temp) {
    case "medium":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {recipes.map(({ img, title }) => (
            <MediumCard key={img} img={img} title={title} />
          ))}
        </div>
      );
    case "small":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {recipes.map(({ img, title }) => (
            <SmallCard key={img} img={img} title={title} />
          ))}
        </div>
      );
  }
}
