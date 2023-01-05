import { MongoClient } from "mongodb"

const { DATABASE_URL, MONGO_DB } = process.env

if (!DATABASE_URL) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env.local"
  )
}

if (!MONGO_DB) {
  throw new Error(
    "Please define the MONGO_DB environment variable inside .env.local"
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(DATABASE_URL, opts).then(client => {
      return {
        client,
        db: client.db(MONGO_DB),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}