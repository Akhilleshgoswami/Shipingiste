import { app } from "./App.js";
import dotenv from "dotenv";
import connectionToDb from "./config/database.js";

// hnadling Uncaught Exeption
process.on("uncaughtException", () => {
  console.log(`Error${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exeption`);
  process.exit(1);
});

dotenv.config({ path: "Backend/config/confin.env" });

//connect to data base

connectionToDb();

const server = app.listen(process.env.PORT, (req, res) => {
  console.log("sever is runing on ", process.env.PORT);
});

// unhandeled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error${err.message}`);
  server.close(() => {
    process.exit(1);
  });
  console.log(`Shutting down the server due to unhandled promise rejection`);
});
