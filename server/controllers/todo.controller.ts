import { AuthRequest } from "../middlewares/auth.middleware"
import { todo } from "../models/todo.model";
import { user } from "../models/user.model"
import { Request, Response, NextFunction } from 'express';

const addTodo = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const reqUser = req.user;
        const body = req.body;
        
        const loggedUser = await user.findById(reqUser._id)

        if (!loggedUser) return res.status(404).json({ message: 'User not found' })

        const newTodo = new todo({
            text: body.text,
            done: false,
            time: body.time,
            user: loggedUser._id,

        })

        loggedUser.todos.push(newTodo)

        await newTodo.save()
        await loggedUser.save()

        res.status(201).json({ message: 'Todo created successfully' })

      } catch (error) {
        next(error);
      }
    };

export {
    addTodo,
}