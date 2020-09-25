import counterReducer, { setCounter, CounterType } from "../counter.duck";

describe("counter duck", () => {
  it("should create a setCounter action", () => {
    const expectedAction = {
      type: CounterType.SET_COUNTER,
      payload: 10,
      error: undefined,
      meta: undefined,
    };

    const result = setCounter(10);

    expect(result).toEqual(expectedAction);
  });

  it("reducer should return initial state", () => {
    const initialState: any = { value: 1 };
    const expectedState = { value: 1 };
    const result = counterReducer(initialState, { type: "@test/TEST" });

    expect(result).toEqual(expectedState);
  });

  it("reducer should update value when setvalue is received", () => {
    const initialState = { value: 1 };
    const expectedState = { value: 11 };
    const action = setCounter(10);
    const result = counterReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it("reducer should update value with negative value", () => {
    const initialState: any = { value: 1 };
    const expectedState = { value: -2 };
    const action = setCounter(-3);
    const result = counterReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });
});
