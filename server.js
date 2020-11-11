// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();
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

/*
// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// TODO-ROUTES!

app.post('/all',postfunction);

function postfunction(req,res){
    console.log('POST received');
    
}
*/

app.post('/addAnimal', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  console.log(animalData)
}
