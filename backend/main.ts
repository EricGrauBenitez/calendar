import express from 'express';
import eventsRoutes from './routes/events';
import Event, { EventModel } from './models/Event';
const connectDB = require('./db');


const app = express();

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Middleware de rutas
app.use('/', eventsRoutes);


app.listen(3000, () => {
  console.log('Servidor Express corriendo en el puerto 3000');
});



// ! Base de datos
connectDB();
