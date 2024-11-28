import { fetchMockCategories } from "@/services/mockApi";
import React from "react";
import MoviesSection from "./components/layouts/MoviesSection";
import Header from "./components/layouts/Header";



const Page = async () => {
  const categories = await fetchMockCategories();

  return (
    <main className="">
      {categories[0]?.movies[0] ?
        <Header movie={categories[0].movies[0]}
        /> : null}

      <MoviesSection categories={categories} />
    </main>
  );
};

export default Page;
