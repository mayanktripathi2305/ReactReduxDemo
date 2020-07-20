import { createStore } from "redux";
import { pickleReducer } from "./Pickle/pickleReducer";

const store = createStore(pickleReducer);

export default store;
