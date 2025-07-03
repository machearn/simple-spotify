import { Schema, model, Types, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  likedSongs: Types.ObjectId[];
  followedArtists: Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    likedSongs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
    followedArtists: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
  },
  { timestamps: true },
);

export default model<IUser>("User", userSchema);
