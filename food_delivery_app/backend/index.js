const express = require('express')
const app = express()
const port = 5000
const {connection} = require("./db")


app.get('/', (req,res) => {
    res.send('hello world')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))

app.listen(port, async() =>{
    try {
        await connection;
        console.log("server connected to db")
    } catch (error) {
        console.log("something went wrong")
    }
    console.log(`app listening on port ${port}`);
})