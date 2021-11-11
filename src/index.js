import express from 'express'

import { connectDB } from '*/config/mongodb.js'

import { env } from '*/config/environment.js'

const app = express()


connectDB().catch(console.log)


app.get('/', (req, res) => {
  res.end(' <h1> hello word</h1> <br></br>')

})
app.listen(env.PORT, env.HOST_NAME, () => {
  console.log (`running at ${env.HOST_NAME} : ${env.PORT} `)
})
