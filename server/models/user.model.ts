import mongoose, { Schema, model, Document } from 'mongoose';
import { User } from '../types';
import { TodoSchema } from './todo.model';


interface userDocument extends User, Document { }

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: {
        type: String,
        index: true,
        lowercase: true,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,
    },
    password: { type: String, required: true, minlength: 8 },
    todos: [TodoSchema]
});


const user = model<userDocument>('User', UserSchema);

export {
    user,
    userDocument,
    
}
