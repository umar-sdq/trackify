import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); 

app.use(express.json());


app.use((req, res, next) => {
  const error = new Error("Route non trouvée");
  error.code = 404;
  next(error);
});

app.listen(5001, () => {
  console.log("serveur écoute sur http://localhost:5001");
});
