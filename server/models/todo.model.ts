import mongoose, { Schema, model, Document } from 'mongoose';
import { TODO } from '../types';


interface todoDocument extends TODO, Document { }

const TodoSchema = new Schema<TODO>({
    text: { type: String, required: true },
    done: { type: Boolean, required: true },
    time: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});


const todo = model<todoDocument>('TODO', TodoSchema);

export {
    todo,
    todoDocument,
    TodoSchema,
    
}   
