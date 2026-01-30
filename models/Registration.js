import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    participantName: { type: String, required: true },
    department: { type: String, required: true },
    registeredAt: { type: Date, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Registration', registrationSchema);
