import { Router } from 'express';
import * as eventController from '../controllers/eventController';

const router = Router();

// Ruta para obtener todos los eventos
router.get('/events', eventController.getAllEvents);

// Ruta para crear un nuevo evento
router.post('/events', eventController.createEvent);

// Ruta para actualizar un evento existente por su ID
router.put('/events/:id', eventController.updateEvent);

// Ruta para eliminar un evento por su ID
router.delete('/events/:id', eventController.deleteEvent);


export default router;
