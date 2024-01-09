require('dotenv').config()
const cors = require('cors')

const { MongoClient } = require('mongodb')
const express = require('express')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/submissions', async (req, res) => {
    const client = new MongoClient(process.env.MONGO_URI)

    try {
        await client.connect()
        const database = client.db('ideaboxdb')
        const submissionCollection = database.collection('submissions')

        const submissionData = await submissionCollection.find({}).toArray()
        
        res.status(200).json(submissionData)
    }
    catch(e) {
        res.json({ error : e })
    }
    finally {
        await client.close()
        console.log("Closing MongoDB client...")
    }
})

app.listen(process.env.PORT, () => { console.log(`Listening on PORT ${process.env.PORT} `)})