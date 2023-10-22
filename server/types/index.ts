import mongoose from "mongoose";
import { todoDocument } from "../models/todo.model";

export interface User {
    name: string,
    email: string,
    password: string,
    todos?: todoDocument[]
}

export interface TODO {
    done: boolean;
    text: string;
    time: Date;
    user: mongoose.Types.ObjectId;
}