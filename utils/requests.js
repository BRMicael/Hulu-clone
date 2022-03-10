const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
    },
    fetchSciFiMovies: {
        title: 'Sci-Fi',
        url: `/discover/movie?with_genres=37&language=pt-BR&api_key=${API_KEY}`
    },
    fetchAnimationMovies: {
        title: 'Animation',
        url: `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`
    },
    fetchTv: {
        title: 'Tv Movie',
        url: `/discover/movie?with_genres=10770&language=pt-BR&api_key=${API_KEY}`
    },
}