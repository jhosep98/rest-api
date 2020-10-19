import express, { json } from "express";
// Routes
import IndexRoutes from "./routes/index.routes";
import TaskRoutes from "./routes/tasks.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(json());

//  routes
app.use(IndexRoutes);
app.use("/tasks", TaskRoutes);

export default app;
