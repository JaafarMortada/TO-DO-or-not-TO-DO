import { Todos } from "../types";

const todos: Todos = [
  {
    id: 1,
    done: false,
    text: "Complete homework",
    time: new Date("2023-10-19T15:30:00"),
  },
  {
    id: 2,
    done: true,
    text: "Buy groceries",
    time: new Date("2023-10-20T10:00:00"),
  },
  {
    id: 3,
    done: false,
    text: "Read a book",
    time: new Date("2023-10-21T18:00:00"),
  },
];

export default {
  async getTodos() {
    await wait(3500)
    return todos
  },

}

function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}