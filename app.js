
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

   
   //appending  
//var newSlide = slider.appendChild(clone);
// before insert
var addPage = document.querySelector('.addPage');

// var newSlide = clone;
slider.insertBefore(clone,addPage);





//console.log(newSlide);
var notes = clone.children[1];
//console.log(notes);
var newTextarea = notes.firstElementChild;
//console.log(newTextarea);
var tile = clone.firstElementChild;
//console.log(tile);
var h4 = tile.firstElementChild;
//console.log(h4);


// value zero
newTextarea.value="";

// id giving

var f = ++i;
 var id = 't'+f ;
 console.log('id:',id);

clone.setAttribute('id',id)

console.log(clone)


}
