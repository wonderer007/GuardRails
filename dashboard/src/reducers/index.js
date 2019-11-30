const rootReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case 'SET_RESULTS':
      return {
        ...state,
          listing: payload.results,
      }
    default:
      return state
  }
}

export default rootReducer
