import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Esto extiende la interfaz Request para incluir "user"
    }
  }
}

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key';

// Middleware de autenticación que verifica el token
export const authenticatedReq = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(' ')[1];

  console.log('Token recibido:', token); // Agrega esta línea para verificar el token

  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    (req as any).user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
    return;
  }
};
