import { combineReducers } from "redux"

import { TodoStore } from './TodoStore'

export default class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this)
  }
}