import { act, renderHook } from "@testing-library/react-hooks";
import useExchange from "../useExchange";

const getControlledPromise = () => {
  let deferred: any;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe("useExchange hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Fetch data from the API", async () => {
    global.fetch = jest.fn();

    await act(async () => {
      renderHook(() => useExchange("USD"));
    });

    const expectedURL = "https://api.exchangeratesapi.io/latest?base=USD";

    expect(global.fetch).toHaveBeenCalledWith(expectedURL);
  });

  it("return data when fetch is completed", async () => {
    const { deferred, promise } = getControlledPromise();

    global.fetch = jest.fn().mockImplementation(() => promise);

    const { result, waitForNextUpdate } = renderHook(() => useExchange("USD"));

    deferred.resolve({
      json: () => ({
        rates: {
          BRL: 6.3,
        },
      }),
    });
    await waitForNextUpdate();

    const expectedState = { realValue: 6.3, error: "" };

    expect(result.current).toEqual(expectedState);
  });

  it("handle error", async () => {
    const { deferred, promise } = getControlledPromise();

    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise(() => {
          throw "Fetch Error";
        })
    );

    const { result, waitForNextUpdate } = renderHook(() => useExchange("USD"));

    await waitForNextUpdate();

    const expectedState = { realValue: 0, error: "Erro ao carregar dados" };

    expect(result.current).toEqual(expectedState);
  });
});
