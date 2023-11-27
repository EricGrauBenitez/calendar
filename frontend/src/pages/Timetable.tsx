import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import EventFetcher from '../components/EventFetcher';
import NavigateButton from '../components/NavigateButton';
import TodayEvents from '../components/TodayEvents';

const localizer = momentLocalizer(moment);

const Timetable: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [todayEvents, setTodayEvents] = useState<any[]>([]);

  useEffect(() => {
    const today = moment().startOf('day'); 

    const filteredEvents = events.filter((event) => {
      const eventDate = moment(event.date).startOf('day'); 
      return eventDate.isSame(today); 
    });

    setTodayEvents(filteredEvents);
  }, [events]);

  const eventStyleGetter = (event: any) => {
    const style = {
      backgroundColor: event.color, // Asigna el color del evento como color de fondo
      borderRadius: '5px', // Puedes agregar otros estilos según necesites
      opacity: 0.8,
      color: '#fff', // Color del texto, ajusta según el contraste con el color de fondo
      border: '0px', // Borde del evento, puedes personalizarlo
    };
    return { style };
  };
  
  return (
    <div>
      <h2>Calendario</h2>
      <EventFetcher onDataLoad={(data) => setEvents(data)} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="date"
        endAccessor="date"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
      />
      <NavigateButton to="/event-submit" label="Crear evento" />
      <TodayEvents /> 
    </div>
  );
};

export default Timetable;