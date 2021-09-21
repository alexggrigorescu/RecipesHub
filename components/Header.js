import React from "react";

import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/solid";

import Button from "./Button";

import logo from "../assets/logo.png";

import DarkMode from "./DarkMode";
import DropdownMenu from "./DropdownMenu";
import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function Header() {
  const [session] = useSession();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 grid grid-cols-3 bg-white dark:bg-metalic shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <a>
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </a>
      </div>
      {/* Middle */}
      <div className="flex items-center dark:bg-darkgray border-1 rounded-full py-2 md:shadow-lg hover:scale-105 transition transform duration-200 ease-out ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm  placeholder-gray-400"
          type="text"
          placeholder="Start your search..."
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-blue-500 dark:bg-newblue text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end ">
        <DarkMode />

        {(session && (
          <div className="flex items-center  border-2 rounded-full cursor-pointer ">
            {/* Show menu only if user is logged in */}
            <DropdownMenu>
              <div className="flex items-center hover:scale-110 transition transform duration-200 ease-out">
                <MenuIcon className="h-6 mx-2 text-gray-800 dark:text-secondary" />
                <Image
                  src={session.user.image}
                  layout="fixed"
                  width="30"
                  height="30"
                  className="rounded-full"
                />
                {/* <UserCircleIcon className="h-6 text-gray-800 dark:text-secondary" /> */}
              </div>
            </DropdownMenu>
          </div>
        )) || (
          <Button
            buttonType="contain"
            label="Sign In"
            onClick={() => router.push("/authentication/signin")}
          />
        )}
      </div>
    </header>
  );
}
