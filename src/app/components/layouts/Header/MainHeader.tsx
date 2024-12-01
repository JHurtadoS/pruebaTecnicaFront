
"use client";

import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import RatingBar from "../../ratingBar";
import { Movie } from "@/services/moviesApi";
import HeaderMovieWrapper from "./HeaderMovieWrapper";

interface HeaderProps {
    movie: Movie;
}

const Header: React.FC<HeaderProps> = ({ movie }) => {
    const { title, rating, horizontal_image, isFavorite } = movie;

    return (
        <HeaderMovieWrapper
            imageUrl={horizontal_image || ""}
            altText={`${title} Hero Image`}
            classname=" h-[400px] "
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full">

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
                    <p className="text-md sm:text-lg max-w-4xl text-pretty">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    </p>
                </div>


                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16">
                        <RatingBar rating={rating} />
                    </div>
                    <HeartIcon
                        className={`w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-105 transition-transform ${isFavorite ? "text-red-500" : "text-white"
                            }`}
                    />
                </div>
            </div>
        </HeaderMovieWrapper>
    );
};

export default Header;
