export interface Todo {
    id: number;
    done: boolean;
    text: string;
    time: Date;
}

export interface Todos extends Array<Todo> { }