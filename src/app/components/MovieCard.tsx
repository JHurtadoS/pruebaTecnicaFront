"use client"

import React, { useState } from "react";
import Image from "next/image";
import RatingBar from "./ratingBar";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { Movie } from "@/services/moviesApi";
import { useMovies } from "@/app/components/context/MoviesContext";
import { useRouter } from 'next/navigation';

interface CardProps {
    movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
    const { title, release_date, rating, isFavorite, vertical_image_large, id } = movie;
    const { toggleFavorite } = useMovies();

    const [favorite, setIsFavorite] = useState(isFavorite);


    const router = useRouter();

    const handleCardClick = () => {

        router.push(`/movie/${id}`);
    };

    const handleFavoriteToggle = async (event: React.MouseEvent) => {
        event.stopPropagation();
        try {
            await toggleFavorite(id);
            setIsFavorite(!favorite);
        } catch (error) {
            console.error("Error toggling favorite:", error);
        }
    };

    return (
        <div
            className="bg-neutral-900 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform relative cursor-pointer"
            onClick={handleCardClick}
        >

            <div className="relative w-full h-[280px]">
                {vertical_image_large && (
                    <Image
                        src={vertical_image_large}
                        alt={`${title} Poster`}
                        layout="fill"
                        objectFit="fill"
                        className="rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    />
                )}
            </div>


            <div className="px-7 py-2 flex flex-col space-y-2 h-48 ">
                <h3 className="text-lg font-bold truncate">{title}</h3>
                <p className="text-sm text-gray-400">{release_date}</p>

                <div className="flex items-center ml-4 ">

                    <div className="w-12 h-12">
                        <span className="block mt-2 mb-5">Rating</span>
                        <RatingBar rating={rating} />
                    </div>


                    <div className="w-12 h-12 absolute top-[74.5%] right-9 z-10">

                        <button
                            className="focus:outline-none"
                            onClick={handleFavoriteToggle}
                        >

                            <span className="block mt-2 mb-7">Rating</span>
                            {favorite ? (
                                <SolidHeart className="w-8 h-8 text-red-500" />
                            ) : (
                                <SolidHeart className="w-8 h-8 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
