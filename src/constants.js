export const listTypes = {
  "populares-en-taquilla": "populares-en-taquilla",
  "estrenos-para-toda-la-familia": "estrenos-para-toda-la-familia",
  "estrenos-imprescindibles-en-taquilla":
    "estrenos-imprescindibles-en-taquilla",
  "estrenos-espanoles": "estrenos-espanoles",
  "si-te-perdiste": "si-te-perdiste",
  "nuestras-preferidas-de-la-semana": "nuestras-preferidas-de-la-semana"
};

export const rakutenQueryParams =
  "?classification_id=5&device_identifier=web&locale=es&market_code=es";

export const API_URL = "https://gizmo.rakuten.tv";
export const MOVIE_ENDPOINT = "/v3/movies/";
export const STREAMING_ENDPOINT = "/v3/me/streamings";
export const LIST_ENDPOINT = "/v3/lists/";

export const streamingCommonBody = {
  audio_language: "SPA",
  audio_quality: "2.0",
  content_type: "movies",
  device_serial: "device_serial_1",
  device_stream_video_quality: "FHD",
  player: "web:PD-NONE",
  subtitle_language: "MIS",
  video_type: "trailer"
};
