import express from 'express'

import { connectDB } from '*/config/mongodb.js'

import { env } from '*/config/environment.js'


connectDB()
  .then(() => console.log('connected successfully to database'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit(1)
  })


const bootServer =() => {
  const app = express()

  app.get('/test', async (req, res) => {


    res.end(' <h1> hello word</h1> <br></br>')

  })
  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log (`running at ${env.APP_HOST} : ${env.APP_PORT} `)
  })

}