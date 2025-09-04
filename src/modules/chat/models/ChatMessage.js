import mongoose from 'mongoose';

const ChatMessageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatUser', required: true }, 
});

export const ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);
