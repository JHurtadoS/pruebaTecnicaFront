"use client";


import React, { useEffect } from "react";
import Sidebar from "./SideBar";
import MoviesList from "../MovieList";
import { Category } from "@/services/moviesApi";
import { Skeleton } from "@nextui-org/react";


interface MoviesSectionProps {
    categories: Category[];
    isLoadingMovies?: boolean
}

const MoviesSection: React.FC<MoviesSectionProps> = ({ categories, isLoadingMovies }) => {

    useEffect(() => {
        console.log(categories, isLoadingMovies)
    }, [categories, isLoadingMovies])


    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="w-full lg:w-2/12 ">
                <Sidebar />
            </div>

            <Skeleton isLoaded={!isLoadingMovies} className="w-full lg:w-10/12 bg-gradient-to-r from-[#464646] to-[#444444] p-4 py-6" >
                <MoviesList categories={categories} />
            </Skeleton>

        </div>
    );
};

export default MoviesSection;
