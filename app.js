const express = require ('express');
require('./Database/database')

const bodyParser = require ('body-parser');

const taskrouter= require('./Routes/routes')

var app = express();
 

app.use(express.json())
app.use (bodyParser.urlencoded({extended:false}))
app.use(taskrouter)

app.listen(5000);