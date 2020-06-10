import ApiGateway from "./Api";
import { STREAMING_ENDPOINT, streamingCommonBody } from "../constants";

export default class Streaming extends ApiGateway {
  constructor(movieId) {
    super(STREAMING_ENDPOINT, {
      method: "POST",
      body: {
        ...streamingCommonBody,
        content_id: movieId
      }
    });
  }
}
