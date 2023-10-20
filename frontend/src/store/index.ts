import { defineStore } from 'pinia';
import { Todo } from '../types';
import todos from '../api/todos';

interface State {
    all: Todo[];
    isLoading: boolean;
}

export const useTodosStore = defineStore('todos',{
    state: (): State => ({
        all: [],
        isLoading: true,
      }),
    
    actions: {
        async fetchTodos() {
            try {
                const todoList = await todos.getTodos();
                this.all = todoList; 
                console.log(this.all)
            } catch (error) {
                console.error('Error fetching todos:', error);
            } finally {
                this.isLoading = false
            }
        },
    
        async setDone(id: number) {
            const todo = this.all.find((todo: Todo) => todo.id === id);
            if (todo) {
              todo.done = true
            }
        },
    },
});
