import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const transactionSchema = new mongoose.Schema({
    transactionId: { type: String, default: uuidv4 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: {type: Number, required: true},
    type: {type: String, enum: ['income', 'expense'], required: true},
    category: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('Transaction', transactionSchema);