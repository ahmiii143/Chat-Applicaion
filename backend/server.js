import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./db/ConnectDb.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();
app.use(express.json()); // used to parsed the data from the req.body
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectDB();
  console.log(`app is listening on the ${PORT}`);
});
