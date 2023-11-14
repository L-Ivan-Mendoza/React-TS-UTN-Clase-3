import express from 'express'
import { settingsDotEnvDb } from "./src/config/dotenv.config.js"
import cors from "cors"
//import helmet from "helmet"
//import morgan from 'morgan'

const app = express();

app.use(cors())
app.use(express.json())
//app.use(helmet())
//app.use(morgan(dev))

const PORT = settingsDotEnvDb().port

app.listen(PORT, () => console.log(`Servidor en Puerto ${PORT}`))
