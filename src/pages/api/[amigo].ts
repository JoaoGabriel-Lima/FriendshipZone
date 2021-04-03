import {connectToDatabase} from '../../util/mongodb';
export default async function handler(request, response) {
    const { amigo } = request.query
    const {db} = await connectToDatabase();
    // const collection = db.collection('friends')
    // var search1 = "luan"
    const data = await db.collection("friends").find({ amigo: amigo }).toArray();
    // response.json(data)
    if (data.length > 0) {
        // console.log("found")
        return response.status(201).json({ ok: "true", displayname: data[0].displayname, funfacts: data[0].funfacts, aniversario: data[0].aniversario, dataqueconhecemos: data[0].dataqueconhecemos, textos: data[0].textos, corfavorita: data[0].corfavorita})
    } else {
        // console.log("not found")
        return response.status(201).json({ ok: true, tem: false})
    }
}