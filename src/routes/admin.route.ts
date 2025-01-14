import { Router } from 'express';
import { createAdmin, getAdminByUsername, verifyAdminPassword } from '../services/adminService';

const router = Router();

// Crear un nuevo administrador
router.post('/create', async (req, res) => {
  const { username, password } = req.body;
  const admin = await createAdmin(username, password);
  res.json(admin);
});

// Verificar si un administrador existe
router.get('/exists/:username', async (req, res) => {
  const admin = await getAdminByUsername(req.params.username);
  res.json(admin ? { exists: true } : { exists: false });
});

// Verificar la contraseña del administrador
router.post('/verify', async (req, res) => {
  const { username, password } = req.body;
  const admin = await verifyAdminPassword(username, password);
  res.json(admin ? { valid: true, admin } : { valid: false });
});

export default router;
