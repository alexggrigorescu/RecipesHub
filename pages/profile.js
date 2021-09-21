import React from "react";
import Image from "next/image";
import ProfilePicture from "../assets/profilePicture.png";
import bannerImage from "../assets/cuisine_1.jpg";
import Footer from "../components/Footer";
import EditProfileForm from "../components/EditProfileForm";
import RecipeForm from "../components/RecipeForm";
import GridList from "../components/GridList";
import Header from "../components/Header";

import { BiFoodMenu } from "react-icons/bi";
import { MdPlace, MdWork, MdEmail } from "react-icons/md";
import { getSession } from "next-auth/client";

import { useRouter } from "next/router";

export default function profile({ session, recipes, user }) {
  const router = useRouter();

  return (
    <div>
      <Header />
      <main>
        {/* Profile picture */}
        <div className="relative h-[100px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]">
          <Image src={bannerImage} layout="fill" objectFit="cover" />
        </div>

        {/* Main container */}
        <div className="relative py-60 sm:py-16 bg-gray-100 dark:bg-metalic shadow-top">
          <div className="container max-w-7xl px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-darkgray w-full mb-6 shadow-md rounded-2xl -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <div className="relative w-40 h-40 -mt-20 border-2 border-gray-400 dark:border-newblue rounded-full">
                        <Image
                          src={session.user.image || user?.image}
                          className="rounded-full "
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Edit profile button */}
                  {router.route === "/profile" && (
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                      <EditProfileForm
                        label="Edit Profile"
                        modalTitle="Edit your profile"
                        openButtonLabel="Edit Profile"
                        primaryButtonLabel="Save changes"
                        secondaryButtonLabel="Cancel"
                      />
                    </div>
                  )}

                  {/* Profile stats */}
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide">
                          #NUMBER
                        </span>
                        <span className="text-sm ">Recipes</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          #NUMBER
                        </span>
                        <span className="text-sm ">Likes</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          #NUMBER
                        </span>
                        <span className="text-sm ">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User information */}
                <div className="text-center my-8">
                  <h3>{session.user.name || user?.name}</h3>
                  <div className="mt-0 mb-2  font-medium flex items-center justify-center gap-2">
                    <MdPlace />
                    {session.user.location}
                    #LOCATION
                  </div>
                  <div className="mb-2  mt-10 flex items-center justify-center gap-2">
                    <MdEmail />
                    {session.user.email || user?.email}
                  </div>
                  <div className="mb-2  flex items-center justify-center gap-2">
                    <MdWork />
                    #OCCUPATION
                  </div>
                </div>

                {/* User description */}
                <div className="mb-10 py-2 border-t border-gray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Add new recipe button */}
                {router.route === "/profile" && (
                  <div className="text-center">
                    <h3 className="text-sm font-semibold">Add new recipe</h3>
                    <div className="my-5">
                      <RecipeForm
                        openButtonLabel="+"
                        modalTitle="Add new recipe"
                        primaryButtonLabel="Save recipe"
                        secondaryButtonLabel="Cancel"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recipe list header */}
            <div className="flex items-start  p-5 border-b border-solid border-blueGray-200 rounded-t mb-9">
              <div>
                <BiFoodMenu size="2em" className="text-gray-500" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-500">
                Recipes list
              </h3>
            </div>

            {/* Recipe grid list */}
            <div className="flex justify-center">
              {/* <GridList cardSize="medium" /> */}
              {recipes?.map(({ id, title, author, description }) => (
                <div key={id}>
                  <p>{title}</p>
                  <p>id:{author}</p>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) return { redirect: { destination: "/", permanent: false } };

  const response = await fetch(
    `http://localhost:3000/api/user/${session.user.id}/recipes`
  );

  const recipes = await response.json();

  return {
    props: {
      session,
      recipes,
    },
  };
}
