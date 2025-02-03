import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import adminRoutes from './routes/admin/admin.routes';
import categoryRoutes from './routes/categories/category.routes';
import productRoutes from './routes/products/product.routes';
import paydateRoutes from './routes/paydates/paydate.routes';
import deliveryRoutes from './routes/deliveryOptions/delivery.routes';

dotenv.config();

const app = express();

// 🔹 Permitir acceso desde cualquier origen
const corsOptions = {
  origin: '*', // 👈 Permite cualquier dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  exposedHeaders: ['token'], // Headers que el frontend puede leer
};

// Habilitar CORS con opciones definidas
app.use(cors(corsOptions));

// Permitir JSON en las solicitudes
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ---- Rutas ---- //
app.use('/products', productRoutes);
app.use('/admin', adminRoutes);
app.use('/categories', categoryRoutes);
app.use('/paydates', paydateRoutes);
app.use('/delivery', deliveryRoutes);

export default app;
