import { action as Action } from "typesafe-actions";
import { Reducer } from "redux";

export enum CounterType {
  SET_COUNTER = "@counter/SET_COUNTER",
}

export const setCounter = (value: number) => Action(CounterType.SET_COUNTER, value);

export interface CounterState {
  readonly value: number;
}

const INITIAL_STATE: CounterState = {
  value: 0,
}

const reducer: Reducer<CounterState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CounterType.SET_COUNTER: {
      return {...state, value: action.payload + state.value};
    }
    default:
      return state;
  }
}

export default reducer;
