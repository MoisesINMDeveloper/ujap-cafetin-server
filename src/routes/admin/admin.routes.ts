import express from 'express';
import { authenticatedReq } from '../../middleware/auth.middleware';
import { createAdminController, getAdminByUsernameController, loginAdminController, verifyAdminPasswordController } from './controllers';

const router = express.Router();

// Autenticarse como administrador
router.post('/login', loginAdminController);

// Proteger las rutas con el middleware de autenticación
router.post('/create', authenticatedReq, createAdminController);
router.get('/exists/:username', authenticatedReq, getAdminByUsernameController);
router.post('/verify', authenticatedReq, verifyAdminPasswordController);

export default router;
