import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const uri = 'mongodb+srv://umarsdq06:trackify@trackify.uhn5nvk.mongodb.net/?retryWrites=true&w=majority&appName=trackify'

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
