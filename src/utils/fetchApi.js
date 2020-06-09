const ERROR_MESSAGE = "TIMEOUT_ERROR";
const REQUEST_TIMEOUT_MS = 80000;

const fetchAsync = async (url, options) => {
  const headers = { "Content-Type": "application/JSON" };

  const optionsWithHeader = {
    ...options,
    headers
  };
  const response = await fetch(url, optionsWithHeader);
  if (!response || !response.json) {
    const errorMessage = `Failed connecting to ${url}`;
    return new Error(errorMessage);
  }
  return response.json();
};

const fetchApi = (url, options) => {
  return Promise.race([
    fetchAsync(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(ERROR_MESSAGE)), REQUEST_TIMEOUT_MS)
    )
  ]);
};

export default fetchApi;
