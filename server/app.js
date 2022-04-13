const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();
const DB = "mongodb+srv://sociobeeReact:sociobeeReact@cluster0.p5rxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err);
})

app.use(cors())
//routes
app.use(express.json())
app.use('/auth',require('./routes/auth'))
app.use('/blog',require('./routes/blogs'))
app.use(express.static(__dirname));


app.listen(5000,()=>{
    console.log(`listening on 5000`)
})