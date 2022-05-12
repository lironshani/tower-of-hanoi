function gameState(state = [], action) {
  switch (action.type) {
    case CLICK_ROD1:
      return {
        ...state,
        rod1,
      };
    default:
      return state;
  }
}
