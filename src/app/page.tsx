"use client"

import React, { useEffect, useState } from "react";
import MoviesSection from "./components/layouts/MoviesSection";
import Header from "./components/layouts/Header/MainHeader";
import ModalContainer from "./components/modals/modalContainer";
import { useMovies } from "./components/context/MoviesContext";
import { Spinner } from "@nextui-org/react";
import { Category } from "@/services/moviesApi";

const Page = () => {
  const { categories, firstLoading, isLoadingMovies } = useMovies();


  const [newCategories, setNewCategories] = useState<Category[]>([])

  useEffect(() => {
    setNewCategories(categories)
  }, [categories])


  const firstCategoryWithMovies = newCategories.find(
    (category) => category.movies && category.movies.length > 0
  );



  return (
    <section className="flex flex-col">
      {firstLoading ? (
        <div className="flex justify-center items-center h-screen  ">
          <Spinner size="lg" />
        </div>
      ) : (
        <>
          {firstCategoryWithMovies && firstCategoryWithMovies.movies[0] ? (
            <Header movie={firstCategoryWithMovies.movies[0]} />
          ) : null}
          <div>
            <MoviesSection categories={categories} isLoadingMovies={isLoadingMovies} />
            <ModalContainer />
          </div>
        </>
      )}
    </section>
  );
};

export default Page;
