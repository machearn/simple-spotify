import { Schema, model, Document } from "mongoose";

export interface IArtist extends Document {
  name: string;
  genre?: string;
}

const artistSchema = new Schema<IArtist>(
  {
    name: { type: String, required: true, unique: true },
    genre: { type: String },
  },
  { timestamps: true },
);

export default model<IArtist>("Artist", artistSchema);
