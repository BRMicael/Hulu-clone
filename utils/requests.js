const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Em alta',
        url: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
    },
    fetchTopRated: {
        title: 'Mais votados',
        url: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
    },
    fetchActionMovies: {
        title: 'Ação',
        url: `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
    },
    fetchComedyMovies: {
        title: 'Comédia',
        url: `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
    },
    fetchHorrorMovies: {
        title: 'Terror',
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
        title: 'Animação',
        url: `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`
    },
    fetchTv: {
        title: 'Tv filme',
        url: `/discover/movie?with_genres=10770&language=pt-BR&api_key=${API_KEY}`
    },
}