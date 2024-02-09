import React, { useEffect, useState } from 'react';
import moment from 'moment';
import EventFetcher from '../components/EventFetcher';

const TodayEvents: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [todayEvents, setTodayEvents] = useState<any[]>([]);

  useEffect(() => {
    const today = moment().startOf('day'); 

    const filteredEvents = events.filter((event) => {
      const eventStart = moment.utc(event.start).startOf('day'); 
      return eventStart.isSame(today, 'day'); 
    });

    setTodayEvents(filteredEvents);

  }, [events]);
  

  
  return (
    <div>
      <EventFetcher onDataLoad={(data) => setEvents(data)} />
      {todayEvents.length > 0 && (
        <div>
          <h3>Eventos para hoy:</h3>
          <ul>
            {todayEvents.map((event, index) => (
              <li key={index}>{event.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodayEvents;