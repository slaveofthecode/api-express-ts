import express from 'express'
import dotenv from 'dotenv'
import { routes } from './routes'

dotenv.config() // load .env file

const PORT = process.env.PORT_NUMBER ?? 3000
const app = express()

app.use(express.json()) // for parsing application/json - transform req.body to json

app.listen(PORT, () => { // start the Express server
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

app.get('/', (_req, res) => { // _req is unused
  const today = new Date().toLocaleDateString()
  res.send(`Hello World! ${today} - hi`)
})

// User Routes
app.use('/api/users', routes.userRouter)
