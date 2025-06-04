import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const uri = 'mongodb://localhost:27017/trackify'

  if (!uri) {
    process.exit(1);
  }

  if (isConnected) return;

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log(" Base de donnée MongoDB connectée");
  } catch (err) {
    console.error(" Erreur de connexion à MongoDB:", err.message);
    process.exit(1);
  }
};
