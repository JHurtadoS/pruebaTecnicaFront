"use client";

import React from "react";
import Image from "next/image";
import { Movie } from "@/services/moviesApi";
import { useRouter } from "next/navigation";

interface SimpleCardMovieProps {
    movie: Movie;
    GoUrl?: boolean
}

const SimpleCardMovie: React.FC<SimpleCardMovieProps> = ({ movie, GoUrl }) => {
    const { title, vertical_image_large, id } = movie;
    const router = useRouter();

    const handleCardClick = () => {
        if (GoUrl)
            router.push(`/movie/${id}`);
    };

    return (
        <div
            className="bg-neutral-800 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            onClick={handleCardClick}
        >

            <div className="relative w-full h-[350px]">
                {vertical_image_large && (
                    <Image
                        src={vertical_image_large}
                        alt={`${title} Poster`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    />
                )}
            </div>


            <div className="px-4 py-4">
                <h3 className="text-lg font-bold truncate">{title}</h3>
            </div>
        </div>
    );
};

export default SimpleCardMovie;
