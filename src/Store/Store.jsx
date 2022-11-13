import { createStore } from "redux";
import { Authreducer } from "./Reducer";

export const Store = createStore(Authreducer);
