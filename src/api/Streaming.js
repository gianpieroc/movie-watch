import ApiBuilder from "./ApiBuilder";
import { STREAMING_ENDPOINT } from "../constants";

const body = {
  audio_language: "SPA",
  audio_quality: "2.0",
  content_type: "movies",
  device_serial: "device_serial_1",
  device_stream_video_quality: "FHD",
  player: "web:PD-NONE",
  subtitle_language: "MIS",
  video_type: "trailer"
};

export default class Streaming extends ApiBuilder {
  constructor(movieId) {
    super(STREAMING_ENDPOINT, {
      method: "POST",
      body: {
        ...body,
        content_id: movieId
      }
    });
  }
}
