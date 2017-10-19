import { observable } from "mobx"

class TodoStore {
  @observable todos = ["get milk", "buy eggs"]
  @observable filter = ""
}


export default new TodoStore