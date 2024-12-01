/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import { getsMoviesPopularTmbd, Movie, MovieById } from "@/services/moviesApi";
import { getMovieById, getMoviesRecomendations } from "@/services/moviesApi";
import { useParams } from "next/navigation";
import IndividualMovieHeader from "@/app/components/layouts/Header/IndividualMovieHeader";
import SimpleCardMovie from "@/app/components/SimpleCardMovie";
import { Spinner } from "@nextui-org/react";
import { useSession } from "@/app/components/context/authContext";

export default function MoviePage() {
    const { id } = useParams();


    const { user } = useSession();
    const userId = user?.id || undefined;


    const [movie, setMovie] = useState<MovieById | null>(null);
    const [recommendations, setRecommendations] = useState<Movie[]>([]);
    const [recommendationsTmd, setRecommendationsTmb] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchMovieAndRecommendations = async () => {
            try {
                setIsLoading(true); // Inicia la carga

                if (id && typeof id === "string") {
                    const movieData: MovieById = await getMovieById(id, userId);
                    setMovie(movieData);

                    const recommendationsData = await getMoviesRecomendations(id);
                    setRecommendations(recommendationsData);
                }

                const recommendationsTmdData = await getsMoviesPopularTmbd();
                setRecommendationsTmb(recommendationsTmdData);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setIsLoading(false); // Finaliza la carga
            }
        };

        fetchMovieAndRecommendations();
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-neutral-800">
                <div className="text-center">
                    <Spinner size="lg" color="white" />
                    <p className="text-white mt-4">Cargando...</p>
                </div>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-neutral-800">
                <div className="text-center">
                    <h1 className="text-3xl text-white font-bold">Película no encontrada</h1>
                    <p className="text-gray-400 mt-2">Lo sentimos, no pudimos encontrar la película que estás buscando.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="flex flex-col bg-neutral-700 min-h-screen">
            <IndividualMovieHeader movie={movie} />

            <div className="space-y-10 px-8 py-12">
                <section>
                    {recommendations.length > 0 ? <h2 className="text-2xl font-bold text-white mb-4">Recommendations</h2> : null}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {recommendations.map((movie) => (
                            <SimpleCardMovie key={movie.id} movie={movie} GoUrl />
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-10">Recommendations TMBD</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {recommendationsTmd.map((movie) => (
                            <SimpleCardMovie key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>
            </div >
        </section >
    );
}
