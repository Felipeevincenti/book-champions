import 'dotenv/config';
import { PORT } from "./config/config.js";
import booksRoutes from "./routes/books.routes.js"
import express from 'express'
const app = express();

app.use(express.json());

app.use("/api/books", booksRoutes);

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto ", PORT);
});