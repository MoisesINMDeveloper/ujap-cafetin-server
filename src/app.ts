import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import adminRoutes from './routes/admin/admin.routes'
import categoryRoutes from './routes/categories/category.routes'

dotenv.config()

const app = express()

//Configuracion de CORS//
let urlFront;

if(process.env.ENV === 'DEV'){
    urlFront = 'http://localhost:3000';
} else {
    urlFront = process.env.URL_FRONT;
}

const corsOptions ={
    origin: urlFront,
    exposedHeaders: ['token']
};
//Habilitar CORS//
app.use(cors(corsOptions))
//Usar JSON//
app.use(express.json())

//----Rutas----//
// app.use('/products','Aqui va la ruta sin comillas')
// app.use('/categories','Aqui va la ruta sin comillas')
app.use('/admin', adminRoutes)
app.use('/category', categoryRoutes)
export default app;