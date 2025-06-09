import Transaction from "../models/transaction.js";
export const addTransaction = async (req, res) => {
  const { userId, amount, type, category, description, date } = req.body;

  try {
    const transaction = new Transaction({
      userId,
      amount,
      type,         
      category,
      description,
      date: date || Date.now() 
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.error('Transaction creation error:', err); 
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

export const getTransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findOne({ transactionId: id });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching transaction' });
  }
};
export const getUserTransactions = async (req, res) => {
  const { userId } = req.params;

  try {
    const transactions = await Transaction.find({ userId }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};
export const updateTransaction = async (req, res) => {
  const { id } = req.params; 
  const { amount, type, category, description, date } = req.body;

  try {
    const updated = await Transaction.findOneAndUpdate(
      { transactionId: id },
      { amount, type, category, description, date },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update transaction' });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Transaction.findOneAndDelete({ transactionId: id });

    if (!deleted) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 }); // newest first
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch all transactions' });
  }
};

export default {
  addTransaction,
  getTransactionById,
  getUserTransactions,
  updateTransaction,
  deleteTransaction,
  getAllTransactions
};

