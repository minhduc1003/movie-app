export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const key = "65df17f6df5c47dd3d47b3e72315e496";
const dbMovieSearch = "https://api.themoviedb.org/3/";
const dbMovie = "https://api.themoviedb.org/3/movie/";
export const dbApi = {
  movieSearch: (updateQuery, itemOffset) =>
    `${dbMovieSearch}search/movie?api_key=${key}&query=${updateQuery}&page=${itemOffset}`,
  movieData: (url) => `${dbMovie}${url}?api_key=${key}`,
  movieDataDetail: (slug, detail) =>
    `${dbMovie}${slug}${detail}?api_key=${key}`,
};
export const picApi = "https://image.tmdb.org/t/p/w500/";
