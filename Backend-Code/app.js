// Import express and mongooese packages
const express = require('express');
const mongoose = require('mongoose');

//import router
const routes = require('./Routers/index');

const host = "localhost";
const port = 8900;

const uri = "mongodb+srv://Zoufisha:Zoufi2021@cluster0.40etm.mongodb.net/DB-1?retryWrites=true&w=majority";
const app = express();
// Middleware to handle json date
app.use(express.json());

// Handling CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type', 'Authorization');
    next();
})

app.use('/',routes);


mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}).
    then(() => {
        app.listen(process.env.PORT || 8900,host,() => {
            console.log(`Server running at ${host}:${port}`);
        });
    }).
    catch((err) => {
        console.log(err);
    }
)
