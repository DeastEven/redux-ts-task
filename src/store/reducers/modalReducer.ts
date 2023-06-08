interface ModalAction {
  type: string;
}

export const enum modalActionType {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

const defaultState = false;
export const modalReducer = (state = defaultState, action: ModalAction) => {
  switch (action.type) {
    case modalActionType.OPEN_MODAL:
      return (state = true);
    case modalActionType.CLOSE_MODAL:
      return (state = false);
    default:
      return state;
  }
};
