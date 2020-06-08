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
    <StreamingContainer data-testid="streaming-page">
      <ReactPlayer
        playing
        light
        controls
        width="100%"
        height="100%"
        url="https://prod-stpeter-pmd.limelight.cdn.rakuten.tv/8/3/0/830b8d2e2b552ad51e72ef927f6116b1-mc-0-137-0-0_SD_TRAILER_PAR_1_1/830b8d2e2b552ad51e72ef927f6116b1-mc-0-137-0-0_SD_TRAILER_PAR_1_1.mp4?e=1591638118&amp;h=1b27435aba84599d9103aba17bbb6bd1"
      />
    </StreamingContainer>
  );
};

export default Streaming;
