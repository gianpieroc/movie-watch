import React, { useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetStreaming } from "../../redux/streaming/actions";
import {
  streamingDataSelector,
  isLoadingStreamingSelector
} from "../../redux/streaming/selectors";
import { StreamingContainer } from "./Streaming.styled";

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
    <StreamingContainer data-testid="streaming-page-content">
      <ReactPlayer
        playing
        light
        controls
        width="100%"
        height="100%"
        url={streaming.stream_infos[0].url}
      />
    </StreamingContainer>
  );
};

export default Streaming;
