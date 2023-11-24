import React, { useState } from 'react';

interface EventData {
  title: string;
  date: string;
  color: string;
  description?: string;
}

interface AddEventFormProps {
  onSubmit: (data: EventData) => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, date, color, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)} 
      placeholder="Título" 
      />
      <input 
      type="datetime-local" 
      value={date} 
      onChange={(e) => setDate(e.target.value)} 
      placeholder="Fecha" 
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
