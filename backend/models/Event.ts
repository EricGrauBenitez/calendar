import mongoose, { Schema, Document } from 'mongoose';

export interface Event extends Document {
  title?: string;
  date: Date;
  color?: string;
  description?: string;
}

export interface EventModel extends Event, Document {}

const EventSchema: Schema = new Schema({
  title: { type: String, default: 'Evento' },
  date: { type: Date, required: true },
  color: { type: String, default: '#ffffff' },
  description: { type: String }
});

const Event = mongoose.model<EventModel>('Event', EventSchema);

export default Event;
