import React, { useState } from 'react';

interface EventData {
  title?: string;
  start: string;
  end?: string;
  color?: string;
  description?: string;
}

interface AddEventFormProps {
  onSubmit: (data: EventData) => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extraer el día de start
    const startDay = start.substring(0, 10); // 'YYYY-MM-DD'
// ! arreglar que la hora de end no puede ser menos que la hora de start
    // Combinar el día de start con la hora seleccionada para end
    const combinedEnd = `${startDay}T${end}`; // 'YYYY-MM-DDTHH:mm'

    // Llamar a la función onSubmit con los datos combinados para end
    onSubmit({ title, start, end: combinedEnd, color, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Fecha"
      />
      <input
        type="time"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="Fecha final"
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />
      <button type="submit">Crear Evento</button>
    </form>
  );
};

export default AddEventForm;
