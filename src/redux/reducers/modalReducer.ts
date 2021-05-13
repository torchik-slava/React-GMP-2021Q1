import { ActionType, IModalReducerState } from "../../model";

const initialState: IModalReducerState = {
  modalType: null,
  isOpen: false,
  movieIdx: null,
};

export const modalReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        ...action.payload,
        isOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        modalType: null,
        isOpen: false,
        movieIdx: null,
      };
    default:
      return state;
  }
};