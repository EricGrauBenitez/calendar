import mongoose, { Schema, Document } from 'mongoose';

export interface Event extends Document {
  title?: string;
  start: Date;
  end?: Date;
  color?: string;
  description?: string;
}

export interface EventModel extends Event, Document {}

const EventSchema: Schema = new Schema({
  title: { type: String, default: 'Evento' },
  start: { type: Date, required: true },
  end: { type: Date },
  color: { type: String, default: '#ffffff' },
  description: { type: String }
});

const Event = mongoose.model<EventModel>('Event', EventSchema);

export default Event;
