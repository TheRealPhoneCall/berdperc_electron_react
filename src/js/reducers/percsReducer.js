
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
          percs: action.payload.percs
        }
      }
      case "ADD_PERC": {
        return {
          ...state,
          percs: [...state.percs, action.payload.perc],
          perc: action.payload.perc
        }
      }
      case "GET_PERC": {
        const percs = [...state.percs]
        const percIndex = percs.findIndex(perc => perc.id === action.payload.id)
        const perc = percs[percIndex]
        console.log("perc:", perc)
        return {
          ...state,
          perc: perc
        }
      }
      case "UPDATE_PERC": {
        const { id, percUpdated } = action.payload
        const newPercs = [...state.percs]
        const percIdToUpdate = newPercs.findIndex(perc => perc.id === id)
        newPercs[percIdToUpdate] = percUpdated;

        return {
          ...state,
          percs: newPercs,
          perc: percUpdated
        }
      }
      case "DELETE_PERC": {
        let id = action.payload.id
        return {
          ...state,
          percs: state.percs.filter(perc => perc.id !== id)
        }
      }
    }

    return state
}
