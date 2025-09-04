import mongoose from 'mongoose';

const chatUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, 
    required: true,
  },
  status: {
    type: String,
    enum: ['Online', 'Offline'],
    default: 'Offline',
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER', 
  },
}, {
  timestamps: true 
});

export const ChatUser = mongoose.model('ChatUser', chatUserSchema);
