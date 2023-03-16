import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { workdayRoute } from './routes/workday.route'

const app = express()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

app.use(express.json())
app.use(cookieParser())

app.use(workdayRoute)

const _PORT = 3000

app.listen(_PORT, () => {
    console.log(`Server is running at http://localhost:${_PORT}`)
})