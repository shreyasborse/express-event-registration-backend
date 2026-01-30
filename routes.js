import express from 'express';
import { adminLogin, getAllRegistrations, getRegistrationById, createRegistration, updateRegistration, deleteRegistration } from './controllers.js';
import { authenticate } from './middleware.js';

const router = express.Router();

router.post('/login', adminLogin);

//router.post('/registrations', authenticate, createRegistration);
router.post('/registrations' , createRegistration);
router.get('/registrations', authenticate, getAllRegistrations);
router.get('/registrations/:id', authenticate, getRegistrationById);
router.put('/registrations/:id', authenticate, updateRegistration);
router.delete('/registrations/:id', authenticate, deleteRegistration);

export default router;
