"use client";

import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Movie } from "@/types/movie";
import RatingBar from "../ratingBar";

interface HeaderProps {
    movie: Movie;
}

const Header: React.FC<HeaderProps> = ({ movie }) => {
    const { title, description, rating, images, favorite } = movie;

    return (
        <header className="relative h-[400px] w-full text-white shadow-[0_8px_10px_rgba(0,0,0,0.2)]">

            <div className="absolute inset-0 -z-0">
                <Image
                    src={images.hero}
                    alt={`${title} Hero Image`}
                    fill
                    priority
                    className="object-cover opacity-80 md:object-fill"
                    sizes="100vw"
                />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end px-8 bg-gradient-to-t from-black from-[17%] via-transparent pb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full">
                    {/* Columna izquierda: título y descripción */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
                        <p className="text-md sm:text-lg max-w-4xl text-pretty">{description}</p>
                    </div>

                    {/* Columna derecha: Rating y corazón */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16">
                            <RatingBar rating={rating} />
                        </div>
                        <HeartIcon
                            className={`w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-105 transition-transform ${favorite ? "text-red-500" : "text-white"
                                }`}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
