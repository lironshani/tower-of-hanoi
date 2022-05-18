function gameReducer(state = [], action) {
  switch (action.type) {
    case "CLICK_ROD1":
      return {
        ...state,
      };
    default:
      return state;
  }
}
export { gameReducer };
