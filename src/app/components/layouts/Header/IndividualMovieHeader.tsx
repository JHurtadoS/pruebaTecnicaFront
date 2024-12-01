
"use client";

import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import RatingBar from "../../ratingBar";
import { MovieById } from "@/services/moviesApi";
import HeaderMovieWrapper from "./HeaderMovieWrapper";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
    movie: MovieById;
}

const IndividualMovieHeader: React.FC<HeaderProps> = ({ movie }) => {
    const {
        title,
        rating,
        vertical_image_large,
        release_date,
        description,
        trailer_url,
        genres,
        horizontal_image,
        isFavorite,
    } = movie;

    return (
        <HeaderMovieWrapper
            imageUrl={horizontal_image || ""}
            altText={`${title} Hero Image`}
            classname={" lg:h-[605px] md:h-[920px] h-[920px] "}
        >
            <div
                className="flex flex-col lg:flex-row lg:gap-28 gap-12 px-8 py-12"
                style={{ height: "-webkit-fill-available" }}
            >

                <div className=" w-[300px] h-auto relative">
                    {vertical_image_large && (
                        <>
                            <Image
                                src={vertical_image_large}
                                alt={`${title} Poster`}
                                width={300}
                                height={450}
                                className="rounded-lg"
                            />
                            {trailer_url && (
                                <Button
                                    as="a"
                                    href={trailer_url}
                                    target="_blank"
                                    color="primary"
                                    className="mt-4 w-full bg-main text-black rounded-md p-6 font-semibold hover:text-white !opacity-100"

                                    endContent={<PlayIcon className="h-4 w-4" />}
                                >
                                    Official Trailer
                                </Button>
                            )}
                        </>
                    )}



                </div>


                <div className="flex flex-1 gap-y-2 flex-row lg:flex-col">
                    <div>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="text-sm text-gray-white mt-1 font-light">{release_date}</p>

                        <h2 className="text-2xl font-semibold mt-6">Overview:</h2>

                        <p className="text-md mt-6 text-pretty line-clamp-6 md:line-clamp-4  lg:line-clamp-5 line max-w-[450px] md:max-w-[700px] lg:max-w-[800px]">
                            {description ||
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus libero non pellentesque bibendum. Curabitur nec enim at est volutpat consectetur vitae et mauris. Donec molestie enim sed arcu mattis, quis suscipit dui sodales. Donec a pellentesque augue. Aenean convallis dui eu sem tincidunt, sit amet sagittis ligula pulvinar. Sed feugiat diam id laoreet ultrices. Vivamus dapibus faucibus dui. Pellentesque dignissim lobortis augue sit amet egestas. Maecenas luctus ultrices quam, eu vehicula odio laoreet nec. Proin gravida fringilla sem, id sodales ligula tempus porttitor. Proin at lobortis odio. In a mattis massa. Vestibulum et tristique enim. Aenean vel nibh eget velit ullamcorper posuere. Maecenas iaculis feugiat nisi, at vulputate nulla tincidunt non. In sit amet nisl id magna lobortis condimentum id id dui. Proin porta rutrum nibh, a malesuada velit dapibus ultrices. Donec sapien felis, interdum volutpat sagittis ac, imperdiet vitae turpis. Nam magna erat, mattis sit amet leo quis, vehicula vulputate libero. Fusce vehicula, orci id rhoncus iaculis, justo justo lacinia est, ac sodales arcu libero sed urna. Mauris semper congue faucibus. Donec aliquet elementum sem et hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur commodo velit ante. Aliquam odio felis, pulvinar non consectetur lacinia, congue sit amet augue. Pellentesque id tincidunt augue, non elementum ante. Nunc eget libero ac ligula congue scelerisque et eu leo. Donec eget imperdiet ex. Sed ex lectus, mattis in varius ut, maximus nec urna. Nam dictum sapien sed sapien euismod, ac varius dolor cursus. Morbi eu consectetur ligula. Suspendisse accumsan auctor ligula quis pellentesque. Integer aliquet elit non eros facilisis commodo. Donec at nunc at velit mattis pretium ac ut purus. In a pharetra nulla. Quisque facilisis, libero eget hendrerit congue, mi diam semper arcu, vel maximus risus sapien vel sapien. Phasellus pharetra eleifend varius. Vivamus a urna a mi pellentesque pellentesque sit amet interdum est. Integer est ligula, lacinia sed lectus eget, auctor cursus magna."}
                        </p>

                        <div className=" flex justify-between items-end">
                            <div className="flex items-center gap-6 mt-6">
                                <div className="w-20 h-20">
                                    <RatingBar rating={rating} />
                                </div>
                                <div className="flex flex-col w-14 text-wrap">
                                    <span className="text-lg font-semibold">Users Score</span>
                                </div>
                            </div>


                            <HeartIcon
                                className={`w-8 h-8 cursor-pointer hover:scale-110 transition-transform ${isFavorite ? "text-red-500" : "text-white"
                                    }`}
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex flex-wrap gap-6 mt-4 justify-evenly m-auto px-20 w-fit">
                        {genres?.map((genre) => (
                            <Chip
                                key={genre.id}
                                color="secondary"
                                variant="bordered"
                                radius="sm"
                                classNames={{
                                    base: "border-main text-main h-auto",
                                    content: "py-2 px-5 font-semibold",
                                }}
                            >
                                {genre.name}
                            </Chip>
                        ))}
                    </div>
                </div>
            </div>
        </HeaderMovieWrapper>
    );
};

export default IndividualMovieHeader;
