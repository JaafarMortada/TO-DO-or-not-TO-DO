export interface Todo {
    id: number;
    done: boolean;
    text: string;
    time: Date;
}

export interface Todos extends Array<Todo> { }

export interface LoginForm {
    email?: string | null;
    password?: string | null;
}