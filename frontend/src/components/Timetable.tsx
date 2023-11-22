import React, { useState } from 'react';
import { Calendar, momentLocalizer, EventProps } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Timetable: React.FC = () => {
  const [events, setEvents] = useState([]);

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
       <button>Agregar Evento</button>
      
    </div>
  );
};

export default Timetable;