// EventDetails.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEventId } from '../actions/eventActions';

const EventDetails = () => {
  const dispatch = useDispatch();
  const eventId = useSelector((state: any) => state.event.eventId);
  const selectedEvent = useSelector((state: any) => state.event.selectedEvent);
  console.log(eventId);
  

  useEffect(() => {
    // Aquí puedes utilizar el eventId para realizar acciones
    console.log('ID del Evento:', eventId);
    // Llamar a la función que recupera los detalles del evento con el ID
    // fetchEventDetails(eventId);
  }, [eventId]);

  const handleEventClick = (eventId: string) => {
    // Ejemplo de cómo se actualiza el ID del evento en Redux
    dispatch(setEventId(eventId));
  };

  return (
    <div>
      <h2>Detalles del Evento</h2>
      {selectedEvent && (
        <div>
          <p>Título: {selectedEvent.title}</p>
          {selectedEvent.description && (
            <p>Descripción: {selectedEvent.description}</p>
          )}
          <p>Fecha de Inicio: {selectedEvent.start}</p>
          <p>Fecha de Finalización: {selectedEvent.end}</p>
        </div>
      )}
      
      <button onClick={() => handleEventClick('ID_DEL_EVENTO')}>Seleccionar Evento</button>
      
    </div>
  );
};

export default EventDetails;
