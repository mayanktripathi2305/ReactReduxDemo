import { BUY_PICKLE } from "./pickleType";

const initialState = {
  number_of_pickles: 10,
};

export const pickleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PICKLE:
      return {
        ...state,
        number_of_pickles: state.number_of_pickles - 1,
      };
    default:
      return state;
  }
};
