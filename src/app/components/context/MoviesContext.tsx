/* eslint-disable no-unused-vars */
"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getMovies, getGenres, getMoviesByGenre, Category, Genre } from "@/services/moviesApi";
import { toggleFavorite } from "@/services/favoriteApi";
import { useSession } from "./authContext";
import { produce } from "immer"

interface MoviesContextType {
    categories: Category[];
    genres: Genre[];
    selectedGenre: string | undefined;
    isLoadingGenres: boolean;
    isLoadingMovies: boolean;
    firstLoading: boolean;
    handleGenreChange: (genreId: string) => void;
    fetchMovies: () => void;
    toggleFavorite: (movieId: string) => void;
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

const MoviesProvider = ({ children }: { children: ReactNode }) => {
    const { user } = useSession();
    const [categories, setCategories] = useState<Category[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string | undefined>("");

    const [isLoadingGenres, setIsLoadingGenres] = useState<boolean>(true);
    const [isLoadingMovies, setIsLoadingMovies] = useState<boolean>(true);
    const [firstLoading, setFirstLoading] = useState<boolean>(true);


    const userId = user?.id || null;

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const fetchedGenres = await getGenres();
                setGenres(fetchedGenres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            } finally {
                setIsLoadingGenres(false);
            }
        };

        fetchGenres();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let fetchedCategories;
                if (userId) {
                    fetchedCategories = await getMovies(userId);
                } else {
                    fetchedCategories = await getMovies();
                }

                const updatedCategories = produce(fetchedCategories, (draft) => {
                    draft.forEach((category) => {
                        category.movies = category.movies.map((movie) => ({
                            ...movie,
                            isFavorite: movie.isFavorite,
                            rating: movie.rating,
                            release_date: movie.release_date,
                        }));
                    });
                });

                setCategories(updatedCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setIsLoadingMovies(false);
            }
        };

        if (!isLoadingGenres) {
            fetchMovies();
        }
    }, [isLoadingGenres, userId]);



    useEffect(() => {
        if (!isLoadingGenres && !isLoadingMovies) {
            setFirstLoading(false);
        }
    }, [isLoadingGenres, isLoadingMovies]);


    const fetchMoviesByGenre = async (genreId: string | undefined) => {
        setIsLoadingMovies(true);
        try {
            const fetchedMoviesByGenre = await getMoviesByGenre(genreId, userId ?? undefined);
            setCategories(fetchedMoviesByGenre);
        } catch (error) {
            console.error("Error fetching movies by genre:", error);
        } finally {
            setIsLoadingMovies(false);
        }
    };


    const handleGenreChange = (genreId: string) => {
        const genreIdTrim = genreId.trim() === "" ? undefined : genreId;
        setSelectedGenre(genreIdTrim);
        if (genreIdTrim) fetchMoviesByGenre(genreIdTrim);
    };


    const fetchMovies = async () => {
        try {
            setIsLoadingMovies(true);
            const fetchedCategories = await getMovies(userId ?? undefined);
            setCategories(fetchedCategories);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setIsLoadingMovies(false);
        }
    };


    const handleToggleFavorite = async (movieId: string) => {
        if (!userId) {
            console.error("No user ID found in session context");
            return;
        }

        try {
            await toggleFavorite(userId, movieId);
            console.log(`Movie with ID ${movieId} has been toggled in favorites.`);
        } catch (error) {
            console.error("Error toggling favorite movie:", error);
        }
    };

    return (
        <MoviesContext.Provider
            value={{
                categories,
                genres,
                selectedGenre,
                isLoadingGenres,
                isLoadingMovies,
                firstLoading,
                handleGenreChange,
                fetchMovies,
                toggleFavorite: handleToggleFavorite,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

const useMovies = () => {
    const context = React.useContext(MoviesContext);
    if (!context) {
        throw new Error("useMovies must be used within a MoviesProvider");
    }
    return context;
};

export { MoviesProvider, useMovies };
