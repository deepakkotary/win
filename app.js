
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


//////>>>>>
//storeSlider();

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
 
////////////>



}};



function restore(){
     var jonyLength= jony.length;
 for(i=0;jonyLength>=i;i++){
   //console.log(jony[i])  ; 
   var lalu = jony[i];
   
 var bod = lalu.parentNode;
 
 var bo =bod.nextElementSibling
 
var bodu = bo.firstElementChild;
   
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
 
//////>>>>>>>>///////>>

//////>>>>>>>>///////>> 
 
 
 
 
 
     
};




 // trying new features 
 
 
 //console.log(jony.t2);


// only making a feature for title











// slide restablizing



//////////////!/>

function storeSlider(){
 var slider = document.querySelector('.slider')    
var slides =slider.innerHTML;
localStorage.setItem('data',slides);
//console.log(slides);
}

var slider = document.querySelector('.slider'); 

function restoreSlider(){
// var slider = document.querySelector('.slider') ;     
var recieve = localStorage.getItem('data') ;
//console.log(recieve);
 var div = document.createElement("div");
div.className='slider';
 div.innerHTML= recieve;
//console.log(div);


////////////>

slider.parentNode.replaceChild(div, slider);


}




///////>>>>>

//trying to make a auto matic delectation of slides
function deleteSlide(){
     
  var jonyLength= jony.length;
 for(i=0;jonyLength>=i;i++){
   //console.log(jony[i])  ; 
   var lalu = jony[i];
   var laluId = lalu.getAttribute('id');
var bodu =  lalu.parentNode.nextElementSibling.firstElementChild;
 var boduId = bodu.getAttribute('id');
 var laluData = localStorage.getItem(laluId);
 var boduData = localStorage.getItem(boduId);
 var bap = lalu.parentNode.parentNode;
 

if(laluId==='t'){
 console.log(laluId);
 
}else{
 if(laluData===""&& boduData===""){
      bap.remove(); 

}else{
     console.log('200')
}
          
}
      
      
      
 }}


///////>>>>>

function startSlide(){
var oldSlider = document.querySelector('.slider');    
var firstData = localStorage.getItem('t');
var ourData = '                    <div class="slide"><div class="tile"><textarea onkeydown="deepu()" placeholder="Title"maxlength="100"  class="notesTile"id="t"></textarea></div><!-- end of title --><div class="notes"><textarea id="n" placeholder="your thoughts" class="placenotes"></textarea></div>end of notes --></div>';
var newDiv = document.createElement('div');
newDiv.innerHTML=ourData;
if(firstData===null||firstData===undefined){
     
 //slider.appendChild(newDiv);
 //console.log(newDiv);
 //alert('300') 
 localStorage.setItem('t','hello');    
} else if (firstData===""){
   alert('200') 
    //slider.appendChild(newDiv);
 // console.log(newDiv)  
    
}
}


///////>>>>>
///////>>>>>
///////>>>>>
///////>>>>>


// on load



//////////|/>
document.addEventListener('DOMContentLoaded', function() {
     
///////>>>>     
try {
  // Code that may throw an exception
  var d= localStorage.getItem('data');

if(d===null||d===undefined){
    console.log('data is not stored');
}else{
 //restoreSlider();
 console.log('trying to store data');
 //startSlide();
 restoreSlider();
}
////>
  restore();
  
  ///>
} catch (error) {
  // Code to handle the exception
  console.error("An error occurred:", error.message);
} finally {
  // Code that will be executed regardless of whether an exception occurred
  console.log("This block always runs");
  ///>
//restoreSlider(); 
deleteSlide();






}
///////>>>>     
     
//restore();

});

///////////>

window.addEventListener('beforeunload',ev=>{
storeSlider();
store(); 
//alert('200')
})



/////////////////>
document.querySelector('.bton').addEventListener('click',()=>{
  //store();
  //storeSlider();
 // alert('stored')
 restore();
});

document.querySelector('.bton').addEventListener('dblclick',()=>{
  //store();
  restoreSlider();
  alert('restored')
});



////////>
//alert('200')