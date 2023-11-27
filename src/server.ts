import "reflect-metadata"
import express from "express"
import "./database"
import { routes } from "./routes"
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();

const app = express()

app.use(cors())
//origin: ["http://localhost:5000"]

app.use(express.json())

app.use(routes)

app.listen(3000, () => console.log("Servidor funcionando"))