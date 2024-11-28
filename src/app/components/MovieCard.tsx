import React from "react";
import Image from "next/image";
import RatingBar from "./ratingBar";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { Movie } from "@/types/movie";

interface CardProps {
    movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
    const { title, releaseDate, rating, favorite, images } = movie;

    return (
        <div className="bg-neutral-900 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
            {/* Poster Image */}
            <div className="relative w-full h-[300px]">
                <Image
                    src={images.poster}
                    alt={`${title} Poster`}
                    layout="fill"
                    objectFit="fill"
                    className="rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col space-y-2">
                <h3 className="text-lg font-bold truncate">{title}</h3>
                <p className="text-sm text-gray-400">{releaseDate}</p>

                <div className="flex items-center justify-center gap-x-6">
                    {/* Rating */}
                    <div className="w-12 h-12">
                        <RatingBar rating={rating} />
                    </div>

                    {/* Favorite Icon */}
                    <button className="focus:outline-none">
                        {favorite ? (
                            <SolidHeart className="w-8 h-8 text-red-500" />
                        ) : (
                            <SolidHeart className="w-8 h-8 text-white" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
