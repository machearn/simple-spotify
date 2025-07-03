import { Schema, model, Document, Types } from "mongoose";

export interface ISong extends Document {
  title: string;
  artist: Types.ObjectId;
  genre?: string;
  language?: string;
}

const songSchema = new Schema<ISong>(
  {
    title: { type: String, required: true, trim: true },
    artist: { type: Schema.Types.ObjectId, ref: "Artist", required: true },
    genre: { type: String, index: true },
    language: { type: String, index: true },
  },
  { timestamps: true },
);

export default model<ISong>("Song", songSchema);
