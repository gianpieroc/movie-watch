export const movieSelector = (state) => state.movie;

export const isLoadingMovieSelector = (state) => movieSelector(state).isLoading;

export const movieDataSelector = (state) => movieSelector(state).data;

export const movieErrorSelector = (state) => movieSelector(state).error;
