const ERROR_MESSAGE = "TIMEOUT_ERROR";
const REQUEST_TIMEOUT_MS = 10000;

const fetchAsync = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw Error("Failed connecting to:", url);
    }
    return response.json();
  } catch (error) {
    console.error("API Error: \n", error.message);
  }
};

const fetchApi = (url, options) => {
  return Promise.race([
    fetchAsync(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(ERROR_MESSAGE)), REQUEST_TIMEOUT_MS),
    ),
  ]);
};

export default fetchApi;
