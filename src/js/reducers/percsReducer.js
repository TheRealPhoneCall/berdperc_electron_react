
const initialState = {
  percs: [],
  perc: {},
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "FETCH_PERCS": {
        return {...state, fetching: true}
      }
      case "FETCH_PERCS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PERCS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          percs: action.payload,
        }
      }
      case "ADD_PERC": {
        return {
          ...state,
          percs: [...state.percs, action.payload],
        }
      }
      case "GET_PERC": {
        return {
          ...state,
          perc: state.percs.findIndex(perc => perc.id === id),
        }
      }
      case "UPDATE_PERC": {
        const { id, text } = action.payload
        const newPercs = [...state.percs]
        const percToUpdate = newPercs.findIndex(perc => perc.id === id)
        newPercs[percToUpdate] = action.payload;

        return {
          ...state,
          percs: newPercs,
        }
      }
      case "DELETE_PERC": {
        return {
          ...state,
          percs: state.percs.filter(perc => perc.id !== action.payload),
        }
      }
    }

    return state
}
