function undoable (reducer) {
  // call the reducer w/ empty action to
  // populate the initialState
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }

  return function (state = initialState, action) {
    const {past, present, future } = state

    switch (action.type) {
      case 'UNDO':
        const previous = past[past.lenth - 1]
        const newPast = past.slice(0, past.length - 1)
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        }
      case 'REDO':
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      default:
        // Delegate handling the action to
        // the passed reducer
        const newPresent = reducer(present, action)

        if (present === newPresent) {
          return state
        }

        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
  }
}
