export const streamingSelector = (state) => state.streaming;

export const streamingDataSelector = (state) => streamingSelector(state).data;

export const isLoadingStreamingSelector = (state) =>
  streamingSelector(state).isLoading;

export const streamingErrorSelector = (state) => streamingSelector(state).error;
