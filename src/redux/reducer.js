function gameReducer(state = [], action) {
  switch (action.type) {
    case "INITIAL_GAME":
      const initial = action.initialArray;
      console.log(initial);
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
      const steps = state.steps;

      if (state.selectedDisk) {
        console.log(action.rod);
        const arrTo = eval("arr" + `${action.rod}`);
        if (arrTo[0] > state.selectedDisk || arrTo.length === 0) {
          arrTo.splice(0, 0, state.selectedDisk);
          const arrFrom = eval("arr" + `${state.fromRod}`);
          arrFrom.splice(0, 1);
        }
        console.log(arr3);
        return {
          ...state,
          rod1: arr1,
          rod2: arr2,
          rod3: arr3,
          selectedDisk: undefined,
          fromRod: undefined,
          steps: steps + 1,
        };
      }
      const selected =
        rod === 1
          ? state.rod1[0] || undefined
          : rod === 2
          ? state.rod2[0]
          : state.rod3[0];
      console.log(selected);

      return {
        ...state,
        selectedDisk: selected,
        fromRod: rod,
      };
    // case "CLICK_ROD1":
    //   console.log(state);
    //   const arr1 = state.rod1;
    //   if (state.selectedDisk) {
    //     arr1.slice(0, 0, state.selectedDisk);
    //     return {
    //       ...state,
    //       rod1: arr1,
    //       selectedDisk: undefined,
    //     };
    //   }
    //   const selected = state.rod1[0] || undefined;
    //   return {
    //     ...state,
    //     selectedDisk: selected,
    //     fromRod: 1,
    //   };
    // case "CLICK_ROD2":
    //   const arr2 = state.rod2;
    //   if (state.selectedDisk) {
    //     arr2.splice(0, 0, state.selectedDisk);
    //     const arr1 = state.rod1;
    //     if (state.fromRod === 1) arr1.splice(0, 1);
    //     console.log(arr1);
    //     return {
    //       ...state,
    //       rod1: arr1,
    //       rod2: arr2,
    //       selectedDisk: undefined,
    //       fromRod: undefined,
    //     };
    //   }
    //   break;
    default:
      return state;
  }
}
export { gameReducer };
