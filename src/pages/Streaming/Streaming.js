import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetStreaming } from "../../redux/streaming/actions";
import {
  streamingDataSelector,
  isLoadingStreamingSelector
} from "../../redux/streaming/selectors";

const Streaming = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const streaming = useSelector(streamingDataSelector);
  const isLoading = useSelector(isLoadingStreamingSelector);

  useEffect(() => {
    dispatch(startGetStreaming(movieId));
  }, []);

  if (isLoading || !streaming) {
    return <h1 data-testid="streaming-page">Loading...</h1>;
  }

  return (
    <div data-testid="streaming-page">
      <h1>Streaming</h1>
    </div>
  );
};

export default Streaming;
