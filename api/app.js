import http from 'http'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import routes from './server/routes'
import cors from 'cors'

const hostname = '127.0.0.1'
const port = 5000
const app = express()
const server = http.createServer(app)

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

routes(app)

server.listen(port, hostname, () => {
  console.log(`Welcome to GuardRails http://${hostname}:${port}/`)
});
