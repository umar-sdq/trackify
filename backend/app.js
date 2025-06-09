import express from "express";
import cors from "cors";
import transactionRoutes from "./routes/transaction-routes.js"
import { connectDB } from "./util/bd.js";
import userRoutes from './routes/user-routes.js';
const app = express();

await connectDB();
app.use(cors()); 

app.use(express.json());

app.use("/api/transactions", transactionRoutes)
app.use("/api/users", userRoutes);
app.use((req, res, next) => {
  const error = new Error("Route non trouvée");
  error.code = 404;
  next(error);
});

app.listen(5001, () => {
  console.log("serveur écoute sur http://localhost:5001");
});
