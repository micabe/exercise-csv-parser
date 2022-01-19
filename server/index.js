import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'

import apiRoutes from './routes'

const app = express()

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// app.use(helmet())
app.use(cors())

app.use('/api/v1', apiRoutes)
app.use('/uploads', express.static(path.join(process.cwd(), '../uploads')))

app.get('/', (req, res) => {
  res.send('This is from express.js')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server started on port ${port}: http://localhost:${port}`)
})
