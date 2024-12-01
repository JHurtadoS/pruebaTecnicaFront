import apiClient from "./api";


export interface Category {
    name: string;
    movies: Movie[];
}

export interface Genre {
    id: string;
    name: string;
}

export interface Movie {
    id: string;
    title: string;
    rating: number;
    horizontal_image: string | null;
    release_date: string | null;
    trailer_url?: string | null;
    vertical_image_small?: string | null;
    vertical_image_large?: string | null;
    description: string | null;
    category_id?: string | null;
    isFavorite?: boolean
    genres?: Genre[]
}

export interface MovieById extends Movie {
    genres?: Genre[]
}


export async function getMovies(userLogged?: string): Promise<Category[]> {

    const params = userLogged ? { userLogged } : {};

    const { data } = await apiClient.get<Category[]>("/movies", { params });

    return data;
}



export async function getMoviesByGenre(genreId: string | undefined, userLogged?: string): Promise<Category[]> {
    const params = userLogged ? { genreId, userLogged } : { genreId };

    const { data } = await apiClient.get<Category[]>("/movies/by-genre", { params });

    return data;
}


export async function getMovieById(movieId: string, userLogged?: string): Promise<MovieById> {
    const params = userLogged ? { userLogged } : { userLogged };

    const { data } = await apiClient.get<Movie>(`/movies/${movieId}`, { params });
    return data;
}


export async function getGenres(): Promise<Genre[]> {
    const { data } = await apiClient.get<Genre[]>(`/movies/genres`);
    return data;
}


export async function getMoviesRecomendations(movieId: string | undefined): Promise<Movie[]> {

    const params = movieId ? { movieId } : undefined;

    const { data } = await apiClient.get<Movie[]>("/movies/recommendations", { params });

    return data;
}


export async function getsMoviesPopularTmbd(): Promise<Movie[]> {
    const { data } = await apiClient.get<Category>(`/tmdb/popular`);


    return data.movies;
}