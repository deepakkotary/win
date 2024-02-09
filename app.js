
var i = 0;
function fuck(){
 var f = ++i;
 var id = 't'+f ;
 console.log('id:',id);
}

//var tile=document.querySelector(".notesTile");



//appending 
function newDisk(){
 //cloning    
     
  var slider = document.querySelector('.slider');
var slide = document.querySelector('.slide');
//console.log(slide);
var clone = slide.cloneNode(true);

   
   //appending  
//var newSlide = slider.appendChild(clone);
// before insert
var addPage = document.querySelector('.addPage');

// var newSlide = clone;
slider.insertBefore(clone,addPage) ;





//console.log(newSlide);
var notes = clone.children[1];
//console.log(notes);
var newTextarea = notes.firstElementChild;
//console.log(newTextarea);
var tile = clone.firstElementChild;
//console.log(tile);
var notesTile = tile.firstElementChild;
//console.log(notesTile);


// value zero
newTextarea.value="";
notesTile.value="";



// store data checking in localstorage




// id giving

var f = ++i;
 var id = 'n'+f ;
 console.log('id:',id);
var tileId = 't'+f;
newTextarea.setAttribute('id',id)

notesTile.setAttribute('id',tileId);


//console.log(clone)


// store data in local storage

var  data  = document.querySelector('#'+id);
 console.log(data);



// limited character


}



// store data in local storage

function store (){
 var  textArae  = document.querySelector('#'+id);
 console.log(textArae);
 var data =textArae.value;
 console.log(data);
 
 
 //prevention for keydown

// Assume you have an event handler function
// function handleEvent(event) {
//   // Prevent the default behavior of the event
//   event.preventDefault();
// 
//   // Your custom logic here
//   console.log("Event prevented");
//   
// }
// 
// Attach the event handler to a specific element or document
// tile.addEventListener("keypress", handleEvent);

 
 
}



// deciding to length of tile



// function tileLength(){
// var height = tile.value.split('\n').length;
// console.log(height);
// }
// 


// function limited() {
//   var height = tile.value.split('\n').length;
// console.log(height);
// if(height>=3){
//      ev.preventDefault();
//      console.log("now, you can't write");
//      //alert('if')
// }else{
//   console.log('you can write more');
//   //alert('else');
// }
//   
//    
// }
// 
// 


//prevention for keydown

// //Assume you have an event handler function
function handleEvent(event) {
  // Prevent the default behavior of the event
  event.preventDefault();

  // Your custom logic here
  console.log("Event prevented");
  
}

// //Attach the event handler to a specific element or document
function handle (){
     tile.addEventListener("keypress", ev=>{
          ev.preventDefault();
     });
}