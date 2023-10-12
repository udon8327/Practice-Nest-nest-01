import { Schema } from 'mongoose';

export const CatsSchema = new Schema({
  id: { type: String },
  user_name: { type: String, required: true },
  password: { type: String, required: true },
});
