import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {

    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) 

    const dbName = url.parse(uri).pathname.substr(1);

    const db = client.db(dbName)

    cachedDb = db;

    return db;
}

export default async (request, response) => {
    const { amigo } = request.body;
    // console.log(search)
    const db = await connectToDatabase(process.env.MONGODB_URI);
    const collection = db.collection('friends')
    // return response.status(201).json({ ok: true, tem: true})
    var search1 = "luan"
    await collection.find({ amigo: amigo }).toArray(async function (err, results) {
        if (results.length > 0) {
            console.log("found")
            return response.status(201).json({ ok: true, cor: results[0].corfavorita})
        } else {
            console.log("not found")
            return response.status(201).json({ ok: true, tem: false})
        }
    });
}