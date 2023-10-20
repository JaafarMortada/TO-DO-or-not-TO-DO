import { Todos } from "../types";

const todos: Todos = [
  
];

export default {
  async getTodos() {
    await wait(3500)
    return todos
  },

  async addTodo() {
    await wait(1000)
  }
}

function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}