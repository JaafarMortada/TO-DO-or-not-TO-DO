import express, { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { user } from '../models/user.model';
import { envConfig } from '../configs/env.config';

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const { name, email, password } = body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new user({
            name,
            email,
            password: hashedPassword,
            todos: []
        });

        await newUser.save();
        return res.status(200).send({ message: 'User created successfully.' });
    } catch (error) {
        next(error);
    }
};


const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const { loginEmail, password } = body;

        if (!loginEmail || !password) {
            return res.status(401).send({ message: "Email and Password are required" });
          }
  
      const loggedUser =
        ((await user.findOne({ email: loginEmail }).populate("todos").select('+password')))
      if (!loggedUser) return res.status(404).send({ message: "User not found" });
  
      const isValid = await bcrypt.compare(password, loggedUser.password);
      if (!isValid) return res.status(404).send({ message: "email/password incorrect" });
      const {
        name,
        email,
        _id,
        todos,

      } = loggedUser.toJSON();
      const token = jwt.sign({ name, email, _id }, envConfig.JWT_SECRET);
      return res.send({
        user: {
          name,
          email,
          _id,
          todos,
          token,

        },
      });
    } catch (error) {
      next(error);
    }
  };
  

export {
    register,
    login,

};