import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { verifyAdminPassword } from '../services/verifyAdmin.service';  // Aquí verificamos la contraseña

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key'; // Clave secreta del JWT, preferentemente debería estar en el .env

// Autenticarse como administrador
export const loginAdminController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Verificamos las credenciales del admin
  const result = await verifyAdminPassword(username, password);

  if (result.status === 200 && result.admin) {
    // Si las credenciales son correctas, generamos un token JWT
    const token = jwt.sign(
      { id: result.admin.id, username: result.admin.username },
      secretKey,
      { expiresIn: '1h' }  // El token expira en una hora
    );
    res.status(200).json({ token });
  } else {
    res.status(result.status).json({ error: result.message });
  }
};
