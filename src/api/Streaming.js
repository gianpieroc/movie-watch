import ApiBuilder from "./ApiBuilder";
import { STREAMING_ENDPOINT, streamingCommonBody } from "../constants";

export default class Streaming extends ApiBuilder {
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
