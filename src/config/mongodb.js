import { MongoClient } from 'mongodb'
import { env } from '*/config/environment'


const url = env.MONGODB_URL

let dbInstance = null

export const connectDB = async () => {
  const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  // connect client to server Database
  await client.connect()

  // asign client to dbInstance
  dbInstance = client.db(env.DATABASE_NAME)

}

export const getDB = () => {
  if (!dbInstance) throw console.error('must connect database first!')
  return dbInstance
}


