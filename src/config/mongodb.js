import { MongoClient } from 'mongodb'
import { env } from '*/config/environment.js'


const url = env.MONGODB_URL


export const connectDB = async () => {
  const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  try {
    // connect client to server Database
    await client.connect()

    // show list database
    await listDatabase(client)
    console.log(' connected successfully!')
  } finally {
    // Ensure client will disconnect server after finish
    await client.close()
  }
}
const listDatabase = async (client) => {
  let listdatabase = await client.db().admin().listDatabases()
  console.log(listdatabase)
  console.log('database:')
  listdatabase.databases.forEach(db => console.log(`- ${db.name}`))
}


