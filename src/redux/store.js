import { createStore } from "redux";
import { gameReducer } from "./reducer";

const gameState = {
  rod1: [],
  rod2: [],
  rod3: [],
  selectedDisk: undefined,
  fromRod: undefined,
  steps: 0,
};
const store = createStore(gameReducer, gameState);
export default store;
