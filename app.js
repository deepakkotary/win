// var slider = document.querySelector('.slider');
// var slide = document.querySelector('.slide');
// console.log(slide);
// var clone = slide.cloneNode(true);
// console.log(clone);



// id genator 
//1. cloning
// 2. id providing, in reference of previous slide


var i = 0;
function fuck(){
 var f = ++i;
 var id = 't'+f ;
 console.log('id:',id);
}


//appending 
function newDisk(){
 //cloning    
     
  var slider = document.querySelector('.slider');
var slide = document.querySelector('.slide');
console.log(slide);
var clone = slide.cloneNode(true);
//console.log(clone);   
 
 // hidden to floating menu 
 
 // document.querySelector('.float').style.visibility='hidden';
     
     
 // element getting   
   
   //appending  
//var newSlide = slider.appendChild(clone);
// before insert
var addPage = document.querySelector('.addPage');
slider.insertBefore(clone,addPage);





console.log(newSlide);
var notes = newSlide.children[1];
//console.log(notes);
var newTextarea = notes.firstElementChild;
//console.log(newTextarea);
var tile = newSlide.firstElementChild;
//console.log(tile);
var h4 = tile.firstElementChild;
//console.log(h4);


}


// creating a btn for making new slides

// document.querySelector('textarea').addEventListener('focus',()=>{
// var float= document.querySelector('.float');  
//float.style.display='value';
// float.style.visibility='visible';
// })



// document.querySelector('textarea').addEventListener('blur',()=>{
//   document.querySelector('.float').style.visibility='hidden';
// })