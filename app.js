
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

function store (){
 var  textArae  = document.querySelector('#'+id);
 //console.log(textArae);
 var data =textArae.value;
 //console.log(data);
 
 

 
 

 
}


 // trying new features 
 
 var jony =document.getElementsByClassName('notesTile');
 var jolly = document.getElementsByClassName('placeNotes');
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



