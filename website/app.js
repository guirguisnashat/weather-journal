//const { response } = require("express");

/* Global Variables */
const button=document.getElementById('generate');
const zip=document.getElementById('zip').value;
const feel=document.getElementById('feeling');
const key='33c4b756494ec6877b3d1d89efa6d75f';
const baseURL=''
const date=document.getElementById('date');
const temp=document.getElementById('temp').value;
const content=document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date();
//d=Date.now();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();





/*button.addEventListener('click',function(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip={`+zip+`},{+1}&appid={`+key+`}`).then(
      response=>response.json()
    ).then(data=>console.log(data)).catch(
      err=>alert('wrong zip code')
    );
});*/


document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('zip').value;
getAnimal(baseURL,newAnimal,'33c4b756494ec6877b3d1d89efa6d75f')

}
const getAnimal = async (baseURL, animal, key)=>{

  const f=`http://api.openweathermap.org/data/2.5/weather?zip=`+animal+`,&appid=`+'33c4b756494ec6877b3d1d89efa6d75f'+``;
  const res = await fetch(f)
  try {

    const data = await res.json();
    console.log(data.main.temp)
    const date=document.getElementById('date');
    const tempo=document.getElementById('temp');
    const content=document.getElementById('content');
    const feel=document.getElementById('feelings');
    date.innerHTML="Date now : "+newDate;
    tempo.innerHTML="Temperature now : "+data.main.temp;
    content.innerHTML="My feeling now : "+feel.value;
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}




// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// TODO-Chain your async functions to post an animal then GET the resulting data

// TODO-Call the chained function

function postGet(){
    postData('/animal', {fav:'lion'})
      .then(function(data){
        retrieveData('/all')
      })
  }
  