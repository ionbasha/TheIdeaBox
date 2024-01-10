require('dotenv').config()
const cors = require('cors')

const { MongoClient } = require('mongodb')
const express = require('express')

const app = express()

app.use(express.json())
app.use(cors())


// GET all submissions
app.get('/', async (req, res) => {
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

// POST new submission
app.post('/', async (req, res) => {
    const { title, desc, difficulty, techSuggests } = req.body
    const client = new MongoClient(process.env.MONGO_URI)

    try {
        await client.connect()
        const database = client.db('ideaboxdb')
        const submissionCollection = database.collection('submissions')

        const submissionData = {
            title: title,
            desc: desc,
            difficulty: difficulty,
            techSuggests: techSuggests
        }

        await submissionCollection.insertOne(submissionData)
        res.status(201).json("Success")
    }
    catch(error) {
        res.status(400).json("There was an issue")
    }
    finally {
        await client.close()
        console.log("Closing MongoDB client...")
    }
})

app.listen(process.env.PORT, () => { console.log(`Listening on PORT ${process.env.PORT} `)})