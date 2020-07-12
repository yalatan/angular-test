const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');


const Port = process.env.Port || 3000;

require('dotenv/config');

app.use(bodyParser.json());

// const postRoute = require('./routes/post');

// mongodb+srv://admin:<password>@cluster0-o0jvz.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(process.env.DB_Connection,
{ useNewUrlParser: true, 
    useUnifiedTopology: true  },
     ()=>{
    console.log('connected to mongoDB!!!!');
});




//Middleware
app.use('/api/userModel', require('./API/User'));

//ROUTES
app.get('/', (req, res) => {
    res.send('We are at home');
});




app.listen(Port, () => {
    console.log('server start');
});
