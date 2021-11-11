require('dotenv').config()

export const env ={
  MONGODB_URL : process.env.MONGODB_URL,
  HOST_NAME : process.env.HOST_NAME,
  PORT: process.env.PORT
}