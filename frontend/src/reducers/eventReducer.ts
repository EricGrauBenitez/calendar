// eventReducer.ts
import { SET_SELECTED_EVENT } from "../actions/eventActions";

const initialState = {
  selectedEventId: null as string | null,
};

const eventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SELECTED_EVENT:
      return {
        ...state,
        selectedEventId: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
