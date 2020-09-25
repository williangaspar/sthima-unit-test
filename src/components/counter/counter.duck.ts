import { Reducer } from "redux";

export interface CounterState {
  readonly value: number;
}

const INITIAL_STATE: CounterState = {
  value: 0,
}

const reducer: Reducer<CounterState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;
