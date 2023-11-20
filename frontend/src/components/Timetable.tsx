import React from 'react';
import { Calendar, momentLocalizer, EventProps } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Timetable: React.FC = () => {
  const events: EventProps[] = [
    {
      title: 'Reunión',
      start: new Date(2023, 10, 20, 10, 0),
      end: new Date(2023, 10, 20, 12, 0),
    },
  ];

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
    </div>
  );
};

export default Timetable;