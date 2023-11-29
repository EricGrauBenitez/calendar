import React from 'react';
import AddEventForm from '../components/AddEventForm';

const EventSubmit: React.FC = () => {
  const handleSubmit = async (eventData: { 
    title?: string; 
    start: string;
    end?: string; 
    color?: string;
    description?: string;
   }) => {
    console.log(eventData);
    
    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
// ! problema con el envio para que solamente con el start se pueda enviar. creo que es del front. eventData lo da bien, pero hace error 400. thunderclient prueba bien. no sé

      if (response.ok) {
        console.log('Evento creado exitosamente');
      } else {
        console.error('Error al crear el evento');
      }
    } catch (error) {
      console.error('Error de red:', error);
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
