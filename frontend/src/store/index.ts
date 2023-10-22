import { defineStore } from 'pinia';
import { Todo } from '../types';
import { sendRequest } from '../utilities/request';

interface State {
    all: Todo[];
    isLoading: boolean;
}

export const useTodosStore = defineStore('todos', {
    state: (): State => ({
        all: [],
        isLoading: true,
    }),

    actions: {
        async fetchTodos() {
            try {
                const response = await sendRequest({
                    method: "get",
                    includeHeaders: true,
                    route: "/todo/get-todos",
                    body: null
                })

                this.all = []

                const userTodos = response.todos

                userTodos.forEach((todo: any) => {
                    this.addNewTodo({
                        text: todo.text,
                        time: todo.time,
                        id: todo._id,
                        done: todo.done
                    })
                });
            
            } catch (error) {
                console.error('Error fetching todos:', error);
            } finally {
                this.isLoading = false
            }
        },

        addNewTodo(todo: Todo) {
            try {
                this.all.push(todo)
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        },

        resetStore() {
            this.all = []
        },

        async setDone(id: number) {
            const todo = this.all.find((todo: Todo) => todo.id === id);
            if (todo) {
                todo.done = true
            }
        },
    },
});
