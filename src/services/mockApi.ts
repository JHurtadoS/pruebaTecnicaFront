// mockApi.ts

import { Category } from "@/types/movie";


export const mockData: Category[] = [
    {
        id: "1",
        name: "Popular",
        title: "Popular Movies",
        movies: [
            {
                id: "101",
                title: "Shrek 5",
                releaseDate: "August 1, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 75,
                favorite: false,
                tags: ["Animation", "Comedy"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "102",
                title: "Gladiator II",
                releaseDate: "August 16, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 80,
                favorite: true,
                tags: ["Action", "Drama"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "103",
                title: "One Fast Move",
                releaseDate: "August 8, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 85,
                favorite: false,
                tags: ["Thriller", "Action"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "104",
                title: "The Wild Robot",
                releaseDate: "August 2, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 90,
                favorite: true,
                tags: ["Sci-Fi", "Adventure"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "105",
                title: "Deadpool Wolverine",
                releaseDate: "August 5, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 95,
                favorite: false,
                tags: ["Action", "Comedy"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
        ],
    },
    {
        id: "2",
        name: "NowPlaying",
        title: "Now Playing",
        movies: [
            {
                id: "201",
                title: "Lord of War",
                releaseDate: "March 3, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 78,
                favorite: true,
                tags: ["Action", "Drama"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "202",
                title: "House of Wax",
                releaseDate: "May 12, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 70,
                favorite: false,
                tags: ["Horror", "Mystery"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "203",
                title: "Crash",
                releaseDate: "June 15, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 88,
                favorite: true,
                tags: ["Drama", "Crime"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "204",
                title: "Munich",
                releaseDate: "May 15, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 76,
                favorite: false,
                tags: ["Historical", "Thriller"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "205",
                title: "IF",
                releaseDate: "July 6, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 82,
                favorite: true,
                tags: ["Family", "Fantasy"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
        ],
    },
    {
        id: "3",
        name: "Upcoming",
        title: "Upcoming Movies",
        movies: [
            {
                id: "301",
                title: "Godzilla Minus One",
                releaseDate: "August 20, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 85,
                favorite: false,
                tags: ["Action", "Adventure"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "302",
                title: "Oppenheimer",
                releaseDate: "July 21, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 90,
                favorite: true,
                tags: ["Drama", "Historical"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "303",
                title: "John Wick 4",
                releaseDate: "April 10, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 95,
                favorite: true,
                tags: ["Action", "Thriller"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "304",
                title: "Cocaine Bear",
                releaseDate: "March 24, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 70,
                favorite: false,
                tags: ["Comedy", "Horror"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "305",
                title: "Barbie",
                releaseDate: "August 15, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 88,
                favorite: true,
                tags: ["Comedy", "Adventure"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
        ],
    },
    {
        id: "4",
        name: "TopRated",
        title: "Top Rated Movies",
        movies: [
            {
                id: "401",
                title: "Top Gun Maverick",
                releaseDate: "January 17, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 97,
                favorite: true,
                tags: ["Action", "Drama"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "402",
                title: "Jackass Forever",
                releaseDate: "February 4, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 85,
                favorite: false,
                tags: ["Comedy", "Reality"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "403",
                title: "Doctor Strange Multiverse",
                releaseDate: "May 6, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 89,
                favorite: true,
                tags: ["Action", "Fantasy"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "404",
                title: "Mickey",
                releaseDate: "June 1, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 93,
                favorite: false,
                tags: ["Animation", "Family"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
            {
                id: "405",
                title: "The French Dispatch",
                releaseDate: "July 1, 2024",
                description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨",
                rating: 91,
                favorite: true,
                tags: ["Drama", "Comedy"],
                images: {
                    hero: "/images/heroPlaceHolder.webp",
                    poster: "/images/image_mock_movie.png",
                },
            },
        ],
    },
];

export const fetchMockCategories = async (): Promise<Category[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000); // Simulamos un retraso de 1 segundo para imitar una llamada a la API
    });
};
