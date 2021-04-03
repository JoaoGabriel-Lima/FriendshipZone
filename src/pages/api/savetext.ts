import { MongoClient, Db } from 'mongodb'
import url from 'url';

// let cachedDb: Db = null;

// async function connectToDatabase(uri: string) {

//     if (cachedDb) {
//         return cachedDb;
//     }

//     const client = await MongoClient.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }) 

//     const dbName = url.parse(uri).pathname.substr(1);

//     const db = client.db(dbName)

//     cachedDb = db;

//     return db;
// }

// export default async (request, response) => {
//     const { amigo } = request.body;
//     // console.log(search)
//     const db = await connectToDatabase(process.env.MONGODB_URI);
//     const collection = db.collection('friends')
//     // return response.status(201).json({ ok: true, tem: true})
//     var search1 = "luan"
//     await collection.find({ amigo: amigo }).toArray(async function (err, results) {
//         if (results.length > 0) {
//             console.log("found")
//             return response.status(201).json({ ok: true, funfacts: results[0].funfacts})
//         } else {
//             console.log("not found")
//             return response.status(201).json({ ok: true, tem: false})
//         }
//     });
// }
import {connectToDatabase} from '../../util/mongodb';
export default async function handler(request, response) {
    const {db} = await connectToDatabase();
    if(request.method == 'GET'){
        const { amigo } = request.query
        const data = await db.collection("friends").find({ amigo: amigo }).toArray();
        if (data.length > 0) {
            return response.status(201).json({ ok: "true", msg: "Obtido com Sucesso",textarea: data[0].textarea})
        } else {
            return response.status(201).json({ ok: false})
        }
    }
    if(request.method == 'POST'){
        const { text, amigo } = request.body
        const data = await db.collection("friends").find({ amigo: amigo }).toArray();
        if (data.length > 0) {
            await db.collection("friends").updateOne({amigo: amigo}, {$set: {textarea: text}});
            return response.status(201).json({ ok: "true", msg: "Salvo"})
        } else {

            return response.status(201).json({ ok: false})
        }
    }

}