export interface ImageSet {
    hero: string;
    poster: string;
}

export interface Movie {
    id: string;
    title: string;
    releaseDate: string;
    rating: number;
    tags?: string[]
    favorite?: boolean;
    description: string
    images: ImageSet;
}

export interface Category {
    id: string;
    name: string;
    title: string;
    movies: Movie[];
}
