import express from 'express'

import cors from 'cors'
import { corsOptions } from '*/config/cors'

import { connectDB } from '*/config/mongodb.js'

import { env } from '*/config/environment.js'

import { apiV1 } from '*/routes/v1/index.js'


connectDB()
  .then(() => console.log('connected successfully to database'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit(1)
  })


const bootServer =() => {
  const app = express()


  app.use(cors(corsOptions))
  // enable req.body data
  app.use(express.json())

  app.use('/v1', apiV1)


  app.listen(env.APP_PORT || process.env.PORT, () => {
    console.log (`running at  : ${process.env.PORT} `)
  })

}