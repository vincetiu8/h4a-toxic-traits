/**
 * All the functions for interacting with profile data in the MongoDB database
 */
import { Profile } from '../models/profile.model';

/**
 * Creates a new profile in the database.
 * @param firstName - string representing the first name of the profile
 * @param lastName - string representing the last name of the profile
 * @param imageURL - string representing the image URL of the profile
 * @returns The created {@link Profile}
 */
const createProfileInDB = async (
  firstName: string,
  lastName: string,
  imageURL: string,
) => {
  const newProfile = new Profile({
    firstName,
    lastName,
    imageURL,
  });
  return newProfile.save();
};

/**
 * @param id The id of the profile to get.
 * @returns The {@link Profile} with the given id or null if the profile was not found.
 */
const getProfileByIdFromDB = async (id: string) => {
  return Profile.findById(id).exec();
};

/**
 * @returns All the {@link Profile}s in the database.
 */
const getAllProfilesFromDB = async () => {
  return Profile.find({}).exec();
};

/**
 * A function that adds a toxic trait to a profile.
 * @param id The id of the profile to add the toxic trait to.
 * @param toxicTrait The toxic trait to add to the profile.
 */
const addToxicTraitToProfileInDB = async (id: string, toxicTrait: string) => {
  return Profile.findByIdAndUpdate(
    id,
    { $push: { toxicTraits: toxicTrait } },
    { new: true },
  ).exec();
};

/**
 * A function that removes a toxic trait from a profile.
 * @param id The id of the profile to remove the toxic trait from.
 * @param toxicTrait The toxic trait to remove from the profile.
 */
const removeToxicTraitFromProfileInDB = async (
  id: string,
  toxicTrait: string,
) => {
  return Profile.findByIdAndUpdate(
    id,
    { $pull: { toxicTraits: toxicTrait } },
    { new: true },
  ).exec();
};

/**
 * A function that deletes a profile from the database.
 * @param id The id of the profile to delete.
 * @returns The deleted {@link Profile}
 */
const deleteProfileByIdFromDB = async (id: string) => {
  return Profile.findByIdAndDelete(id).exec();
};

export {
  createProfileInDB,
  getProfileByIdFromDB,
  getAllProfilesFromDB,
  addToxicTraitToProfileInDB,
  removeToxicTraitFromProfileInDB,
  deleteProfileByIdFromDB,
};
