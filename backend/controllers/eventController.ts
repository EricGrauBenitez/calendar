import { Request, Response } from 'express';
import Event, { EventModel } from '../models/Event';

// Controlador para obtener todos los eventos
export const getAllEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await Event.find();
    res.json(events);
} catch (error: any) { // Define 'error' como cualquier tipo
    res.status(500).json({ message: (error as Error).message }); // Hace un cast a 'Error' para acceder a 'message'
  }
};

// Controlador para crear un nuevo evento
export const createEvent = async (req: Request, res: Response): Promise<void> => {
  const { title, date, color, description } = req.body;
  const newEvent: EventModel = new Event({ title, date, color, description });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
} catch (error: any) { // Define 'error' como cualquier tipo
    res.status(400).json({ message: (error as Error).message }); // Hace un cast a 'Error' para acceder a 'message'
  }
};

// Controlador para actualizar un evento por su ID
export const updateEvent = async (req: Request, res: Response): Promise<void> => {
    const eventId = req.params.id;
    const { title, date, color, description } = req.body;
  
    try {
      const updatedEvent = await Event.findByIdAndUpdate(
        eventId,
        { title, date, color, description },
        { new: true }
      );
  
      if (!updatedEvent) {
        res.status(404).json({ message: 'Evento no encontrado' });
        return;
      }
  
      res.json(updatedEvent);
    } catch (error: any) {
      res.status(500).json({ message: (error as Error).message });
    }
  };
  
  // Controlador para eliminar un evento por su ID
  export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    const eventId = req.params.id;
  
    try {
      const deletedEvent = await Event.findByIdAndDelete(eventId);
  
      if (!deletedEvent) {
        res.status(404).json({ message: 'Evento no encontrado' });
        return;
      }
  
      res.json({ message: 'Evento eliminado correctamente' });
    } catch (error: any) {
      res.status(500).json({ message: (error as Error).message });
    }
  };
