import express from 'express';
import {
  getHealth,
  getProfile,
  getProjects,
  getTopSkills,
  getEducation,
} from '../controllers/profileController.js';

const router = express.Router();

router.get('/health', getHealth);
router.get('/profile', getProfile);
router.get('/projects', getProjects);//review
router.get('/skills/top', getTopSkills);
router.get('/education', getEducation);


export default router;