import mongoose from 'mongoose';

function getMongoUri(): string {
  const uri = process.env.MONGODB_URI ?? process.env.NEXT_PUBLIC_MONGODB_URI;

  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside Vercel');
  }

  return uri;
}

let cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = (global as any)._mongo || { conn: null, promise: null };

export async function connectToMongo() {
  if (cached.conn) {
    return cached.conn;
  }

  const MONGODB_URI = getMongoUri();

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      // options recommended for mongoose
      // useNewUrlParser and useUnifiedTopology are defaults in mongoose 7
    }).then((m) => m);
  }
  cached.conn = await cached.promise;
  (global as any)._mongo = cached;
  return cached.conn;
}
