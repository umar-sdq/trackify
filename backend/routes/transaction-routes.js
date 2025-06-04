import express from 'express';
import transactionController from '../controllers/transaction-controller.js';
const router = express.Router();

router.get("/", transactionController.getAllTransactions)

router.get("/:id", transactionController.getTransactionById);

router.get("/user/:userId", transactionController.getUserTransactions);

router.post("/", transactionController.addTransaction);

router.patch("/:id", transactionController.updateTransaction);

router.delete("/:id", transactionController.deleteTransaction);

export default router;