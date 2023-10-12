import { Document } from 'mongoose';

export interface Cats extends Document {
  readonly _id: string;
  readonly user_name: string;
  readonly password: string;
}
