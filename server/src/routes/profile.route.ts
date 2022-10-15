/**
 * Specifies the middleware and controller functions to call for each route
 * relating to authentication.
 */
import express from 'express';
import 'dotenv/config';
import {
  addToxicTrait,
  createProfile,
  deleteProfile,
  getAllProfiles,
  getProfileById,
  removeToxicTrait,
} from '../controllers/profile.controller';

const router = express.Router();

/**
 * A POST route to register a user. Expects a JSON body with the following fields:
 * - firstName (string) - The first name of the user
 * - lastName (string) - The last name of the user
 * - email (string) - The email of the user
 * - password (string) - The password of the user
 */
router.post('/create', createProfile);

/**
 * A GET route to get all profiles.
 */
router.get('/all', getAllProfiles);

/**
 * A GET route to get a specific profile. Expects the following fields in the URL:
 * id (string) - The id of the profile to be retrieved
 */
router.get('/one/:id', getProfileById);

/**
 * A POST route to add a toxic trait to a profile. Expects the following fields in the URL:
 * id (string) - The id of the profile to add the toxic trait to
 * Also expects the following fields in the JSON body:
 * toxicTrait (string) - The toxic trait to add to the profile
 */
router.post('/add-toxic-trait/:id', addToxicTrait);

/**
 * A POST route to remove a toxic trait from a profile. Expects the following fields in the URL:
 * id (string) - The id of the profile to remove the toxic trait from
 * Also expects the following fields in the JSON body:
 * toxicTrait (string) - The toxic trait to remove from the profile
 */
router.post('/remove-toxic-trait/:id', removeToxicTrait);

/**
 * A DELETE route to delete a specific profile. Expects the following fields in the URL:
 * id (string) - The id of the profile to be deleted
 */
router.delete('/delete/:id', deleteProfile);

export default router;
