import fetchApi from "./fetchApi";

describe("fetchApi tests", () => {
  const unMockedFetch = global.fetch;

  beforeEach(() => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => ({
          data: "data"
        })
      });
  });

  afterEach(() => {
    global.fetch = unMockedFetch;
  });

  it("should call fetchApi successfully", async () => {
    const response = await fetchApi("https://www.rakuten.tv/");
    expect(response.data).toEqual("data");
  });

  it("should throw error in fetchApi if ok is not true", async () => {
    global.fetch = () => Promise.resolve({ ok: false });
    const response = await fetchApi("https://www.rakuten.tv/");
    expect(response.message).toEqual(
      "Failed connecting to https://www.rakuten.tv/"
    );
  });
});
