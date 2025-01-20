import express from 'express';
import {
  createAdminController,
  getAdminByUsernameController,
  verifyAdminPasswordController,
} from './controllers';
import { authenticatedReq } from '../../middleware/auth.middleware';

const router = express.Router();

// Ruta pública para autenticarse como administrador (sin middleware)
router.post('/login', verifyAdminPasswordController);

// Rutas protegidas por el middleware de autenticación
router.post('/create', createAdminController);
router.get('/exists/:username', authenticatedReq, getAdminByUsernameController);
router.post('/verify', authenticatedReq, verifyAdminPasswordController);

export default router;
