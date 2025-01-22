import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import adminRoutes from './routes/admin/admin.routes';
import categoryRoutes from './routes/categories/category.routes';
import productRoutes from './routes/products/product.routes';
import paydateRoutes from './routes/paydates/paydate.routes';

dotenv.config();

const app = express();

//Configuracion de CORS//
let urlFront;

if (process.env.ENV === 'DEV') {
  urlFront = 'http://localhost:5173';
} else {
  urlFront = process.env.URL_FRONT;
}

const corsOptions = {
  origin: urlFront,
  exposedHeaders: ['token'],
};
//Habilitar CORS//
app.use(cors(corsOptions));
//Usar JSON//
app.use(express.json());

//----Rutas----//
app.use('/products', productRoutes);
app.use('/admin', adminRoutes);
app.use('/categories', categoryRoutes);
app.use('/paydates', paydateRoutes);
export default app;
