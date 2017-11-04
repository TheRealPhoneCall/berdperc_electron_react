import axios from "axios";
import { PercAPI } from "../../data/json_service"

export function fetchPercs() {
  return function(dispatch) {
    dispatch({type: "FETCH_PERCS"});

    const percs = PercAPI.all()
    dispatch({type: "FETCH_PERCS_FULFILLED", payload: { percs }})
  }
}

export function addPerc(last_id, percAdded) {
  const idAdded = last_id + 1
  return {
    type: 'ADD_PERC',
    payload: { id, percAdded }
  }
}

export function getPerc(id) {
  return {
    type: 'GET_PERC',
    payload: { id }
  }
}

export function updatePerc(id, percUpdated) {
  return {
    type: 'UPDATE_PERC',
    payload: { id, percUpdated }
  }
}

export function deletePerc(id) {
  return { 
    type: 'DELETE_PERC', 
    payload: { id }
  }
}
