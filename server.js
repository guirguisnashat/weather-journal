// Setup empty JS object to act as endpoint for all routes
const key='33c4b756494ec6877b3d1d89efa6d75f';
const baseURL=''


// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();

const fetch = require("node-fetch");
/* Middleware*/
const bodyParser=require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

//set port number

const port = 8000;

// Setup Server

const server = app.listen(port, ()=>{
    console.log(`running on localhost: ${port}`)
});



let data=[];
let date=0,feel="",tempo=0;


app.post('/addmovie',addmovie);

function addmovie(req,res){
  data.push(req.body);
  date=req.body.date;
  feel=req.body.feeling;
  tempo=req.body.temp;
}



app.get("/gettemp",doit);


function doit(req,res){
  res.send({date:date,feeling:feel,temp:tempo});
};





