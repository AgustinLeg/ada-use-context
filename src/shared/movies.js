import { atom } from "recoil";

import localStorageEffect from "./utils";

const movieState = atom({
  key: "movieState",
  default: [],
  effects: [localStorageEffect("cart")],
});

export default movieState;
