import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// app.get('/home', (req, res) => {
//     return res.json({"hello": "world"});
// });

app.use("/api/v1/users", userRoutes);
console.log("Server is running on port 8000");

const start = async () => {
  // const connectionDb = await mongoose.connect(
  //  process.env.MONGO_URI
  // );
  // const connectionDb1 = await mongoose.connect(
  //     process.env.MONGO_URI
  //)

  const connectionDb2 = await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Database connected`);
    })
    .catch((err) => {
      console.log(`Database connection error: ${err}`);
    });


  server.listen(app.get("port"), () => {
    console.log("LISTENIN ON PORT 8000");
  });
};

start();

// here there is a mongodb connection problem so we have to set our own server url here and the server is listening on port 8000, the socket io is also connected to the server and it will handle the socket connections and events.
