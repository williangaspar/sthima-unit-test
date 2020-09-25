import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { CounterState } from "../components/counter/counter.duck";

export interface ApplicationState {
  counter: CounterState;
}


export default createStore(rootReducer);
