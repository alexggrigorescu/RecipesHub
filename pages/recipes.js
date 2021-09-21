import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { BiFoodMenu } from "react-icons/bi";
import DetailedCard from "../components/DetailedCard";

export default function recipes({ recipesList }) {
  return (
    <>
      <Header />
      <div class="relative">
        {/* Sidebar Filter Menu */}
        <aside class="relative sm:fixed w-full sm:w-1/6 min-h-screen dark:bg-metalic p-5 bg-white shadow-md">
          <h1 className="p-2 text-lg font-bold">Filters:</h1>

          <div className="p-4">
            <h3 className="font-semibold pt-5">Cuisine</h3>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                American
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Caribbean
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_2" />
              <label htmlFor="Type_2" className="pl-2">
                Chinese
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_1" />
              <label htmlFor="Type_1" className="pl-2">
                French
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_5" />
              <label htmlFor="Type_5" className="pl-2">
                Greek
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                German
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Hungarian
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Indian
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_4" />
              <label htmlFor="Type_4" className="pl-2">
                Italian
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_3" />
              <label htmlFor="Type_3" className="pl-2">
                Japanese
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Lebanese
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_7" />
              <label htmlFor="Type_7" className="pl-2">
                Mediterranean
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Mexican
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Russian
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_6" />
              <label htmlFor="Type_6" className="pl-2">
                Spanish
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Thai
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="Type_8" />
              <label htmlFor="Type_8" className="pl-2">
                Turkish
              </label>
            </div>

            <h3 className="font-semibold pt-5">Prep. time</h3>
            <div className="pl-3 pt-2">
              <input type="checkbox" name="minsTo10" />
              <label htmlFor="minsTo10" className="pl-2">
                0-10 minutes
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="minsTo30" />
              <label htmlFor="minsTo30" className="pl-2">
                11-30 minutes
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="minsTo60" />
              <label htmlFor="minsTo60" className="pl-2">
                31-60 minutes
              </label>
            </div>

            <div className="pl-3 pt-2">
              <input type="checkbox" name="moreThan60" />
              <label htmlFor="moreThan60" className="pl-2">
                more than 60 minutes
              </label>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="w-full md:w-5/6 ml-auto min-h-screen p-12">
          {/* Recipe list header */}
          <div className="flex items-start  p-5 border-b border-solid border-blueGray-200 rounded-t mb-9">
            <div>
              <BiFoodMenu
                size="2em"
                className="text-gray-500 dark:text-gray-300"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-500 dark:text-gray-300">
              Recipes list
            </h3>
          </div>

          {recipesList.map(
            ({
              id,
              image,
              title,
              short_description,
              author,
              cuisine,
              likes,
            }) => (
              <DetailedCard
                key={id}
                img={image}
                title={title}
                short_description={short_description}
                author={author}
                cuisine={cuisine}
                likes={likes}
              />
            )
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // const session = await getSession(context);

  // if (!session) return { redirect: { destination: "/", permanent: false } };

  const response = await fetch(`http://localhost:3000/api/recipes`);

  const recipesList = await response.json();

  return {
    props: {
      recipesList,
    },
  };
}
