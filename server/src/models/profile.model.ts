/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';

// TODO: change token to its own schema to optimize searches
const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  toxicTraits: {
    type: Array,
    required: true,
  },
});

interface IProfile extends mongoose.Document {
  _id: string;
  firstName: string;
  lastName: string;
  imageURL: string;
  toxicTraits: Array<string>;
}

const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);

export { IProfile, Profile };
