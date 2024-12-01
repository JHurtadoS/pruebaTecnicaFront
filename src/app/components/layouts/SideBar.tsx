"use client";

import React, { useEffect, useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useMovies } from "@/app/components/context/MoviesContext";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
    const { genres, handleGenreChange, fetchMovies } = useMovies();
    const [selectedGenre, setSelectedGenre] = useState<string>("");

    useEffect(() => {
        console.log("Selected Genre:", selectedGenre);
        if (!selectedGenre) {
            fetchMovies();
        }
    }, [selectedGenre]);

    return (
        <aside className="p-4 bg-neutral-800 space-y-6 md:flex md:space-y-0 md:gap-x-6 md:flex-row lg:flex-col lg:gap-y-4 h-full">
            <div>
                <div className="flex-1">
                    <h3 className="lg:my-4 text-xl font-medium text-white">Search</h3>
                    <Input
                        label=""
                        placeholder="Search for movies..."
                        classNames={{
                            input: "!bg-neutral-900 !text-white",
                            inputWrapper: "!bg-neutral-900 h-14 rounded-none",
                        }}
                        color="default"
                        className="text-white"
                        isClearable
                        radius="lg"
                        startContent={
                            <MagnifyingGlassCircleIcon className="text-white w-9 h-9" />
                        }
                    />
                </div>
                <div className="flex-1">
                    <h3 className="lg:my-4 text-xl font-medium text-white">Genres</h3>
                    <Select
                        label="Select Genre"
                        variant="bordered"
                        placeholder="Select a genre"
                        onChange={(e) => {
                            const genreId = e.target.value;
                            handleGenreChange(genreId);
                            setSelectedGenre(genreId);
                        }}
                        value={selectedGenre}
                        classNames={{
                            base: "bg-neutral-900",
                            listboxWrapper: "bg-neutral-900",
                            popoverContent: "bg-neutral-900",
                            trigger: "border-0 rounded-none",
                            value: "!text-white",
                            label: "!text-white",
                        }}
                    >
                        {genres.map((genre) => (
                            <SelectItem key={genre.id} value={genre.id}>
                                {genre.name}
                            </SelectItem>
                        ))}
                    </Select>

                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
