import "reflect-metadata"
import express from "express"
import "./database"
import dotenv from 'dotenv';
import cors from "cors"
import routes from './routes';
dotenv.config();

const app = express()
const porta = 3000 

app.use(cors())
//origin: ["http://localhost:5000"]

app.use(express.json())

app.use(routes)

app.listen(porta, () => console.log("Servidor funcionando"))