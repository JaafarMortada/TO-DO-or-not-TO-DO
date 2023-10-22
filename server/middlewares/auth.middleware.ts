import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { envConfig } from '../configs/env.config';

export interface UserPayload extends JwtPayload {
    name: string;
    email: string;
    _id: string;

}

export interface AuthRequest extends Request {
    user: UserPayload;
    
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, envConfig.JWT_SECRET) as UserPayload;
        req.user = decoded ;

        next();

    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
};

export default authMiddleware;