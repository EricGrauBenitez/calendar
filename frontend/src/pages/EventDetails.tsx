import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventDetails } from '../actions/eventActions'; // Importa la acción para obtener los detalles del evento

const EventDetails = () => {
  const dispatch = useDispatch();
  const eventId = useSelector((state: any) => state.event.eventId);
  const selectedEvent = useSelector((state: any) => state.event.selectedEvent);
  
  console.log(selectedEvent);
  
  useEffect(() => {
    if (eventId) {
      // Llamar a la función que recupera los detalles del evento con el ID
      dispatch(fetchEventDetails(eventId)); // Dispara la acción para obtener los detalles del evento
    }
  }, [dispatch, eventId]);

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
    </div>
  );
};

export default EventDetails;
