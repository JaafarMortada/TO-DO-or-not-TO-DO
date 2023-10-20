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
            } catch (error) {
                console.error('Error fetching todos:', error);
            } finally {
                this.isLoading = false
            }
        },

        async addNewTodo(todo: Todo){
            try {
                await todos.addTodo()
                this.all.push(todo)
            } catch (error) {
                console.error('Error adding todo:', error);
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
