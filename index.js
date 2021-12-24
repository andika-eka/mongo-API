import express from 'express'
import route from './routes/index.js'
import  Mongoose  from 'mongoose'
const app = express()
const port = 3000

Mongoose.connect("mongodb://localhost:27017/notif",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = Mongoose.connection
db.on('error',(error)=>console.log(error));
db.once('open', () => console.log("database fucking connected, bitches"))

app.use(express.json())
app.use('/', route)
// app.get('/', (req, res) => {
//     res.send('Hello World!, hey im an idiot')
// })

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
})