import React from 'react';
import AddEventForm from '../components/AddEventForm';

const EventSubmit: React.FC = () => {
  const handleSubmit = async (eventData: { title: string; date: string; color: string }) => {
    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        console.log('Evento creado exitosamente');
        // Aquí podrías manejar la respuesta del backend si es necesario
      } else {
        console.error('Error al crear el evento');
        // Manejar el caso si hay un error al crear el evento
      }
    } catch (error) {
      console.error('Error de red:', error);
      // Manejar errores de red u otros errores
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Evento</h2>
      <AddEventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EventSubmit;
