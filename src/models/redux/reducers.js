
const initialState = {
  counter: 0
}

const counterApp = (state, action) => {
  if (typeof state === undefined) return initialState

  switch(action.type) {
    case  'Add':
      return Object.assign({}, state, { counter: counter++ })
    default:
      return state
  }
}

export default counterApp
