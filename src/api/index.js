import List from "./List";
import Movie from "./Movie";
import Streaming from "./Streaming";

const getListData = async (listType) => {
  const listInstance = new List(listType);
  const list = await listInstance.retrieve();
  return list;
};

const getMovieData = async (movieId) => {
  const movieInstance = new Movie(movieId);
  const movie = await movieInstance.retrieve();
  return movie;
};

const getStreamingData = async (movieId) => {
  const streamingInstance = new Streaming(movieId);
  const streaming = await streamingInstance.retrieve();
  return streaming;
};

export { getListData, getMovieData, getStreamingData };
