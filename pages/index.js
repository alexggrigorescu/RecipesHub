import Banner from "../components/Banner";
import Button from "../components/Button";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ cuisineData, cardsData }) {
  return (
    <div className="relative">
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore different cuisines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cuisineData?.map(({ img, title, subtitle }) => (
              <SmallCard
                key={img}
                img={img}
                subtitle={subtitle}
                title={title}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Top rated recipes</h2>
          <h3 className="text-gray-500">Hold middle mouse and drag to side</h3>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://images.unsplash.com/photo-1558538337-aab544368de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          title="The Best Recipe Ever"
          description="Some description here."
          buttonText="Let's do it"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // const cuisineData = await fetch("LINK").then(
  //   (res) => res.json()
  // );

  // const cardsData = await fetch("LINK").then((res) =>
  //   res.json()
  // );

  const cuisineData = [
    {
      img: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Title Cuisine 1",
      subtitle: "Subtitle Cuisine 1",
    },
    {
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Title Cuisine 2",
      subtitle: "Subtitle Cuisine 2",
    },
    {
      img: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
      title: "Title Cuisine 3",
      subtitle: "Subtitle Cuisine 3",
    },
    {
      img: "https://images.unsplash.com/photo-1579705744735-6cd7bc9214b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      title: "Title Cuisine 4",
      subtitle: "Subtitle Cuisine 4",
    },
    {
      img: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=711&q=80",
      title: "Title Cuisine 5",
      subtitle: "Subtitle Cuisine 5",
    },
    {
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Title Cuisine 6",
      subtitle: "Subtitle Cuisine 6",
    },
    {
      img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Title Cuisine 7",
      subtitle: "Subtitle Cuisine 7",
    },
    {
      img: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Title Cuisine 8",
      subtitle: "Subtitle Cuisine 8",
    },
  ];

  const cardsData = [
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

  return {
    props: {
      cuisineData,
      cardsData,
    },
  };
}
