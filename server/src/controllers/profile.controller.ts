/**
 * All the controller functions containing the logic for routes relating to
 * admin profiles such as getting all profiles, deleting profiles and upgrading profiles.
 */
import express from 'express';
import ApiError from '../util/apiError';
import StatusCode from '../util/statusCode';
import {
  createProfileInDB,
  deleteProfileByIdFromDB,
  getAllProfilesFromDB,
  getProfileByIdFromDB,
} from '../services/profile.service';

/**
 * Create a profile in the database. Upon success, send the client the newly created profile in the res body with 201 CREATED status code.
 */
const createProfile = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { firstName, lastName, imageURL } = req.body;
  if (!firstName) {
    next(ApiError.missingFields(['firstName']));
    return;
  }
  if (!lastName) {
    next(ApiError.missingFields(['lastName']));
    return;
  }
  if (!imageURL) {
    next(ApiError.missingFields(['imageURL']));
    return;
  }
  createProfileInDB(firstName, lastName, imageURL)
    .then((profile) => {
      res.status(StatusCode.CREATED).send(profile);
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((e) => {
      next(ApiError.internal('Unable to create profile'));
    });
};

/**
 * Get all profiles from the database. Upon success, send the client a list of all profiles in the res body with 200 OK status code.
 */
const getAllProfiles = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  return (
    getAllProfilesFromDB()
      .then((profileList) => {
        res.status(StatusCode.OK).send(profileList);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(ApiError.internal('Unable to retrieve all profiles'));
      })
  );
};

/**
 * Get a profile from the database. The id of the profile is expected to be in the request parameter (url). Send a 200 OK status code on success.
 */
const getProfileById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  if (!id) {
    next(ApiError.missingFields(['id']));
    return;
  }

  getProfileByIdFromDB(id)
    .then((profile) => res.status(StatusCode.OK).send(profile))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((e) => {
      next(ApiError.internal('Failed to get profile.'));
    });
};

/**
 * Delete a profile from the database. The id of the profile is expected to be in the request parameter (url). Send a 200 OK status code on success.
 */
const deleteProfile = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  if (!id) {
    next(ApiError.missingFields(['id']));
    return;
  }

  deleteProfileByIdFromDB(id)
    .then(() => res.sendStatus(StatusCode.OK))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((e) => {
      next(ApiError.internal('Failed to delete profile.'));
    });
};

export { createProfile, getAllProfiles, getProfileById, deleteProfile };
