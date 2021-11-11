import express from 'express'

// import { mapOrder } from '*/ultilities/sort.js'

const app = express()
const hostname = 'localhost'
const port = 8080

app.get('/', (req, res) => {
  res.end(' <h1> hello word</h1> <br></br>')

})
app.listen(port, hostname, () => {
  console.log ('running $ hostname : $ port /')
})
