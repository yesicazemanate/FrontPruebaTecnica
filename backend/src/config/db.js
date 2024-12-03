import dotenv from 'dotenv';
import {MongoClient} from 'mongodb'
dotenv.config()

export const connectionDb = async()=>{
    try{
const url = process.env.URL_DB
const name = process.env.NAME_DB

const client = new MongoClient(url)
await client.connect()

console.log('Successful connection to MongoDB')

const db = client.db(name)

return { client, db };

} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);

    }
}