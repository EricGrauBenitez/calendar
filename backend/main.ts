import express from 'express';
import EventModel, { Event } from './models/Event';
const connectDB = require('./db');


const app = express();

// Ruta para obtener todos los eventos
app.get('/events', async (req, res) => {
  try {
    const events: Event[] = await EventModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener eventos' });
  }
});

// Otras rutas para crear, actualizar o eliminar eventos...

app.listen(3000, () => {
  console.log('Servidor Express corriendo en el puerto 3000');
});

// ! Base de datos

connectDB();
