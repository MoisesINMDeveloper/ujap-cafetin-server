import express from 'express';
import { createAdminController, getAdminByUsernameController, verifyAdminPasswordController } from './controllers';
import { authenticatedReq } from '../../middleware/auth.middleware';

const router = express.Router();

// Ruta pública para autenticarse como administrador (sin middleware)
router.post('/login', verifyAdminPasswordController);

// Aplica el middleware para proteger las siguientes rutas
router.use(authenticatedReq);

// Rutas protegidas por el middleware de autenticación
router.post('/create', createAdminController);
router.get('/exists/:username', getAdminByUsernameController);
router.post('/verify', verifyAdminPasswordController);

export default router;
