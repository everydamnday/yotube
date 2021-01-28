import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./model/Video";
import "./model/Comment";
import "./model/User";

const PORT = process.env.PORT || 4000;

const handleListening = (req, res) =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
