import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";

import { CounterType } from "../counter.duck";
import Counter from "../counter";

import { Provider } from "react-redux";

describe("counter component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockStore = configureStore();
  const STORE = mockStore({ counter: { value: 0 } });

  it("should render without crash", () => {
    renderer.create(
      <Provider store={STORE}>
        <Counter />
      </Provider>
    );
  });

  it("should start with counter zero", () => {
    const component = render(
      <Provider store={STORE}>
        <Counter />
      </Provider>
    );
    const expectedValue = "0";
    const value = component.getByTestId("value");
    const result = value.innerHTML;

    expect(result).toBe(expectedValue);
  });

  it("should call setValue when plus button is clicked", () => {
    const mockStore = configureStore();
    const store = mockStore({ counter: { value: 0 } });
    jest.spyOn(store, "dispatch");

    const component = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const btn = component.getByTestId("plus-btn");
    fireEvent.click(btn, {});

    const expectedAction = {
      type: CounterType.SET_COUNTER,
      payload: 1,
      error: undefined,
      meta: undefined,
    };

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should call setValue when minus button is clicked", () => {
    const mockStore = configureStore();
    const store = mockStore({ counter: { value: 0 } });
    jest.spyOn(store, "dispatch");

    const component = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const btn = component.getByTestId("minus-btn");
    fireEvent.click(btn, {});

    const expectedAction = {
      type: CounterType.SET_COUNTER,
      payload: -1,
      error: undefined,
      meta: undefined,
    };

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
