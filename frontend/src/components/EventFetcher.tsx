import React, { useEffect } from 'react';

interface Event {
  title?: string;
  start: string;
  end?: string;  
  color?: string;
  description?: string;
}

const EventFetcher: React.FC<{ onDataLoad: (events: Event[]) => void }> = ({ onDataLoad }) => {
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/events');
        if (response.ok) {
          const data = await response.json();
          onDataLoad(data);
        } else {
          console.error('Error al obtener eventos:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchEvents(); 

  }, []);

  return null; 
};

export default EventFetcher;
