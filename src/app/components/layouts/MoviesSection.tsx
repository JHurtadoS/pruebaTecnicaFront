import React from "react";
import Sidebar from "./SideBar";
import MoviesList from "../MovieList";
import { Category } from "@/types/movie";


interface MoviesSectionProps {
    categories: Category[];
}

const MoviesSection: React.FC<MoviesSectionProps> = ({ categories }) => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 ">
                <Sidebar />
            </div>

            <div className="w-full lg:w-3/4 bg-gradient-to-r from-[#464646] to-[#444444] p-4 py-6">
                <MoviesList categories={categories} />
            </div>

        </div>
    );
};

export default MoviesSection;
