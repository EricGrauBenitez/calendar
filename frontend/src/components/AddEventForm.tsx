import React, { useState } from 'react';

const AddEventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || isNaN(startDate.getTime())) {
      alert('Please enter a valid value');
      return;
    }

    const newEvent = {
      title,
      start: startDate,
    };
    onAddEvent(newEvent);
    setTitle('');
    setStartDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del evento"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="datetime-local"
        value={startDate.toISOString().slice(0, 16)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <button type="submit">Agregar Evento</button>
    </form>
  );
};

export default AddEventForm;
