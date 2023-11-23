import React, { useEffect, useState } from 'react';

interface Event {
  title: string;
  date: string; 
  color: string;
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

    fetchEvents(); // Llamada inicial al cargar el componente

  }, []);

  return null; // No renderizamos nada en este componente
};

export default EventFetcher;
