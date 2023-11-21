import React, { useState } from 'react';
import { Calendar, momentLocalizer, EventProps } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AddEventForm from './AddEventForm';

const localizer = momentLocalizer(moment);

const Timetable: React.FC = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  

  return (
    <div>
      <h2>Calendario</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
       <h2>Agregar Evento</h2>
      <AddEventForm onAddEvent={handleAddEvent} />
    </div>
  );
};

export default Timetable;