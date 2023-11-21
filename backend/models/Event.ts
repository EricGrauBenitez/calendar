import mongoose, { Schema, Document } from 'mongoose';

export interface Event extends Document {
  title?: string;
  start: Date;
  color?: string;
}

const EventSchema: Schema = new Schema({
  title: { type: String, default: 'Evento ' },
  start: { type: Date, required: true },
  color: { type: String, default: '#ffffff' },
});

const EventModel = mongoose.model<Event>('Event', EventSchema);

export default EventModel;
