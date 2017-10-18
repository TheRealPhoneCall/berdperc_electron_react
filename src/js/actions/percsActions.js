import axios from "axios";
import { PercAPI } from "../../data/api"

export function fetchPercs() {
  return function(dispatch) {
    dispatch({type: "FETCH_PERCS"});
    
    // FOR ASYNC REQUESTS
    // axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    //   .then((response) => {
    //     dispatch({type: "FETCH_PERCS_FULFILLED", payload: response.data})
    //   })
    //   .catch((err) => {
    //     dispatch({type: "FETCH_PERCS_REJECTED", payload: err})
    //   })

    const percs = PercAPI.all()
    dispatch({type: "FETCH_PERCS_FULFILLED", payload: percs})
  }
}

export function addPerc(id, text) {
  return {
    type: 'ADD_PERC',
    payload: {
      id,
      text,
    },
  }
}

export function updatePerc(id, text) {
  return {
    type: 'UPDATE_PERC',
    payload: {
      id,
      text,
    },
  }
}

export function deletePerc(id) {
  return { type: 'DELETE_PERC', payload: id}
}
