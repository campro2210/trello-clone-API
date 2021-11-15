import express from 'express'

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

  // enable req.body data
  app.use(express.json())

  app.use('/v1', apiV1)


  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log (`running at ${env.APP_HOST} : ${env.APP_PORT} `)
  })

}