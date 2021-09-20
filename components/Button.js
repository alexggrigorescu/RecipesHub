import React from "react";

export default function Button({ label, onClick, type, buttonType, ...props }) {
  return (
    <div>
      <button
        className={setButtonStyle(buttonType)}
        onClick={onClick}
        type={type}
        {...props}
      >
        {label}
      </button>
    </div>
  );

  function setButtonStyle(temp) {
    switch (temp) {
      case "link":
        return "w-full bg-transparent text-blue-500   dark:text-newblue  font-bold py-2 px-4  rounded-full  hover:scale-105 active:scale-100 transition duration-100 ease-out";
      case "warning":
        return `w-full bg-transparent text-red-500 font-bold py-2 px-4  rounded-full hover:scale-105 active:scale-100 transition duration-100 ease-out`;
      case "contain":
        return `w-full bg-blue-500 dark:bg-newblue hover:bg-blue-600 text-white font-bold py-2 px-4  rounded-full hover:shadow-xl hover:scale-105 active:scale-100 transition duration-100 ease-out shadow-md`;
      case "round":
        return `bg-blue-500 dark:bg-newblue hover:bg-blue-600 text-white text-xl font-bold py-2 px-4  rounded-full hover:shadow-md hover:scale-105 active:scale-100 transition duration-100 ease-out shadow-md`;
    }
  }
}
