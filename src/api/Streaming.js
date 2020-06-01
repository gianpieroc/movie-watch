import ApiBuilder from "./ApiBuilder";
import { STREAMING_ENDPOINT } from "../constants";

export default class Streaming extends ApiBuilder {
  constructor() {
    super(STREAMING_ENDPOINT);
  }
}
