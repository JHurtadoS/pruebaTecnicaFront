
"use client";

import React from "react";
import Card from "./MovieCard";
import { Category } from "@/services/moviesApi";

interface MoviesListProps {
    categories: Category[];
}

const MoviesList: React.FC<MoviesListProps> = ({ categories }) => {




    return (
        <div className="space-y-10">
            {categories.map((category) => {

                if (!category.movies || category.movies.length === 0) {
                    return null;
                }

                return (
                    <section key={category.name}>
                        <h2 className="text-2xl font-bold text-white mb-4">{category.name}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {category.movies.map((movie) => (
                                <Card key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default MoviesList;
