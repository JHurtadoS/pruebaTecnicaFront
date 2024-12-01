import apiClient from "./api";
import { Movie } from "./moviesApi";

export interface FavoriteCategory {
    name: string;
    movies: Movie[];
}

export async function getFavorites(userId: string): Promise<FavoriteCategory[]> {
    const { data } = await apiClient.get<FavoriteCategory[]>(`/movies/favorites?userId=${userId}`);
    return data;
}

export async function toggleFavorite(userId: string, movieId: string): Promise<void> {
    await apiClient.post("/movies/favorites", { userId, movieId });
}

