export const isLoadingSelector = state => state.movie.isLoading;

export const moviesSelector = state => state.movie.movieList;

export const searchMoviesSelector = state => state.movie.searchMoviesHistory;

export const movieSelectedSelector = state => state.movie.movieSelected;
