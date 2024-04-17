import { MongoClient } from 'mongodb'
import  config  from './config.js'

function connect() {
  const dbClient = new MongoClient(config.dbURL)

  const db = dbClient.db(config.dbName)
  const dbUsers = db.collection(config.collection)

  console.log('Connected to the database')

  return { collections: { dbUsers }, dbClient }
}

export async function getDb() {
  const { collections, dbClient } = await connect()

  return { collections, dbClient}

}