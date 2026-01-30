import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Registration from './models/Registration.js';

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    //Delete any previous entries
    await Registration.deleteMany();

    // Inster previous registration data from data.js file as document/entries
    await Registration.insertMany([
      {
        eventName: 'Hackathon 2026',
        participantName: 'Amit Sharma',
        department: 'Computer Engineering',
        registeredAt: new Date('2026-01-10T10:30:00Z')
      },
      {
        eventName: 'AI Workshop',
        participantName: 'Sneha Patil',
        department: 'Information Technology',
        registeredAt: new Date('2026-01-11T09:15:00Z')
      },
      {
        eventName: 'Cyber Security Seminar',
        participantName: 'Rahul Mehta',
        department: 'Electronics',
        registeredAt: new Date('2026-01-12T14:00:00Z')
      },
      {
        eventName: 'Cloud Computing Bootcamp',
        participantName: 'Neha Kulkarni',
        department: 'Computer Engineering',
        registeredAt: new Date('2026-01-13T11:45:00Z')
      }
    ]);

    console.log('Seed data inserted');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
