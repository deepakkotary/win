
var i = 0;
function fuck(){
 var f = ++i;
 var id = 't'+f ;
 //console.log('id:',id);
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
// console.log('id:',id);
var tileId = 't'+f;
newTextarea.setAttribute('id',id)

notesTile.setAttribute('id',tileId);


//console.log(clone)


// store data in local storage

var  data  = document.querySelector('#'+id);
 //console.log(data);



// limited character

 // trying new features 
 
 var jony =document.getElementsByClassName('notesTile');
 
 //console.log(jony.t2);



}



// store data in local storage

var jony =document.getElementsByClassName('notesTile');
 var jolly = document.getElementsByClassName('placeNotes');
 
 // store data

function store (){
 var jonyLength= jony.length;
 for(i=0;jonyLength>=i;i++){
   //console.log(jony[i])  ; 
   var lalu = jony[i];
   
 var bodu = lalu.parentNode.nextElementSibling.firstElementChild;
   
// console.log(parent);

var laluId = lalu.getAttribute('id');
var boduId = bodu.getAttribute('id');
//console.log(`the id of lalu and bodu is ${laluId} and ${boduId}`);

// getting value 
var laluValue = lalu.value;
var boduValue= bodu.value;

//console.log(`the title is ${laluValue} and notes is ${boduValue}`);
 // storing data 
 
 localStorage.setItem(laluId,laluValue);
 localStorage.setItem(boduId,boduValue);
}};



function restore(){
     var jonyLength= jony.length;
 for(i=0;jonyLength>=i;i++){
   //console.log(jony[i])  ; 
   var lalu = jony[i];
   
 var bodu = lalu.parentNode.nextElementSibling.firstElementChild;
   
// console.log(parent);

var laluId = lalu.getAttribute('id');
var boduId = bodu.getAttribute('id');
//console.log(`the id of lalu and bodu is ${laluId} and ${boduId}`);

// getting value 
var laluValue = lalu.value;
var boduValue= bodu.value;

//console.log(`the title is ${laluValue} and notes is ${boduValue}`);
 // restoring data 
  
var laluReturn = localStorage.getItem(laluId);  
lalu.value=laluReturn;
  
var boduReturn = localStorage.getItem(boduId);  
bodu.value=boduReturn;  
  
  
 }     
     
};




 // trying new features 
 
 
 //console.log(jony.t2);


// only making a feature for title





function deepu(){
 var jonyLength= jony.length;
 for(i=0;jonyLength>=i;i++){
   //console.log(jony[i])  ; 
   var lalu = jony[i];

// making a limit function for notesTile

//console.log(limit);

lalu.addEventListener('keydown',ev=>{
     ev.preventDefault();
});

var om = lalu.value.split('\n');
var o = om.length;
//console.log(o)

// lalu.addEventListener('input', event=>{
// 
//   event.preventDefault();
//     //alert('stop');
// 
// })


 }
     
     
};



// on load

window.addEventListener('load',ev=>{
 restore();    
});
window.addEventListener('beforeunload',ev=>{
store();     
})