function gameReducer(state = [], action) {
  switch (action.type) {
    case "INITIAL_GAME":
      const initial = action.initialArray;
      return {
        ...state,
        rod1: initial,
        rod2: [],
        rod3: [],
        selectedDisk: undefined,
        fromRod: undefined,
        steps: 0,
      };
    case "CLICK_ROD":
      const rod = action.rod;
      const arr1 = state.rod1;
      const arr2 = state.rod2;
      const arr3 = state.rod3;
      let steps = state.steps;

      if (state.selectedDisk) {
        const arrTo = eval("arr" + `${action.rod}`);
        if (arrTo[0] >= state.selectedDisk || arrTo.length === 0) {
          arrTo.splice(0, 0, state.selectedDisk);
          const arrFrom = eval("arr" + `${state.fromRod}`);
          arrFrom.splice(0, 1);
          if (arrFrom !== arrTo) steps++;
        }
        return {
          ...state,
          rod1: arr1,
          rod2: arr2,
          rod3: arr3,
          selectedDisk: undefined,
          fromRod: undefined,
          steps: steps,
        };
      }
      const selected =
        rod === 1
          ? state.rod1[0] || undefined
          : rod === 2
          ? state.rod2[0]
          : state.rod3[0];

      return {
        ...state,
        selectedDisk: selected,
        fromRod: rod,
      };

    default:
      return state;
  }
}
export { gameReducer };
