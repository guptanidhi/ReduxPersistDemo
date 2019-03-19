import { FETCH_SAMPLE_DATA, SIMPLE_POST_ACTION, APPEND_USER } from "../actions/actionTypes";

const INITIAL_STATE = {
  sampleData: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case APPEND_USER:
      let newuser = action.payload;
      return {
        ...state,
        sampleData: [...state.sampleData, newuser]
      }
    default:
      return state;
  }
}
