//flatuiColors- for colors.
//things to do
//implement drag and drop to sticky Note.
//add sticky note by hard coding.

let upload=document.querySelector(".upload");
let sideIcon=document.querySelector(".side-icon");
let toolsCont=document.querySelector(".tools-cont");
let pencilTool=document.querySelector(".pencil-tool-cont");
let eraserTool=document.querySelector(".eraser-tool-cont");
let pencil=document.querySelector(".pencil");
let eraser=document.querySelector(".eraser");
let minimizeButton=document.querySelector(".minimize-button");
let textArea=document.querySelector("#message");


let stickyCont=document.querySelector(".sticky-cont");
let stickyNote=document.querySelector(".StickyNote");
let Message=document.getElementById("message");

let stickynoteFlag=false;
let optionsFlag=true;
let pencilFlag=false;
let eraserFlag=false;

let counter=0;

sideIcon.addEventListener("click",(e)=>{

    optionsFlag=!optionsFlag;

    if(optionsFlag===false){

        let sideButton= sideIcon.children[0];
        
        
      
          sideButton.removeAttribute("class");
        // sideButton.setAttribute("class", "fa-solid fa-bars fa-2xl");
        sideButton.setAttribute("class", "fa-solid fa-xmark fa-2xl");
        toolsCont.style.display = "none";
        pencilTool.style.display="none";
        eraserTool.style.display="none";
     

        //try to put animation inside it.

    }

    else {

        let sideButton= sideIcon.children[0];
        
        
      
        sideButton.removeAttribute("class");
        sideButton.setAttribute("class", "fa-solid fa-bars fa-2xl");
      toolsCont.style.display = "flex";

      //try to put animation inside it.


    }
  

  
 

})


pencil.addEventListener("click",(e)=>{
    pencilFlag=!pencilFlag;

    if(pencilFlag)
    {
        pencilTool.style.display="block";

    }
    else{
        pencilTool.style.display="none";

    }
})

eraser.addEventListener("click",(e)=>{
    eraserFlag=!eraserFlag;
    if(eraserFlag)

    {
        eraserTool.style.display="block";

    }
    else{
        eraserTool.style.display="none";

    }
})

//upload eventListner
upload.addEventListener("click",(e)=>{
    let input=document.createElement("input");
    input.setAttribute("type","file");
    input.click();

    input.addEventListener("change",(e)=>{
        let file=input.files[0];
        let url=URL.createObjectURL(file);
        console.log(url);

        let stickyCont=document.createElement("div");
stickyCont.setAttribute("class","sticky-cont");
stickyCont.innerHTML=`
<div class="header-cont">   
    <div class="minimize-button">
    <i class="fa-sharp fa-regular fa-window-minimize fa-sm"></i> 
  
 </div>
 <div class="cancel-button">
 
   <i class="fa-solid fa-xmark fa-sm"></i>
  
  </div>
 </div>
 <img src="${url}" alt=" ">
`
document.body.appendChild(stickyCont);


//drag and drop for upload...

stickyCont.onmousedown = function(event) {

    let shiftX = event.clientX - stickyCont.getBoundingClientRect().left;
    let shiftY = event.clientY - stickyCont.getBoundingClientRect().top;
  
    stickyCont.style.position = 'absolute';
    stickyCont.style.zIndex = 1000;
    document.body.append(stickyCont);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the stickyCont at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      stickyCont.style.left = pageX - shiftX + 'px';
      stickyCont.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the stickyCont on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the stickyCont, remove unneeded handlers
    stickyCont.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      stickyCont.onmouseup = null;
    };
  
  };
  
  stickyCont.ondragstart = function() {
    return false;
  };


    })
})

//sticky-cont event listner...

stickyNote.addEventListener("click",(e)=>{

    
let stickyCont=document.createElement("div");
stickyCont.setAttribute("class","sticky-cont");
stickyCont.innerHTML=`
<div class="header-cont">   
    <div class="minimize-button">
    <i class="fa-sharp fa-regular fa-window-minimize fa-sm"></i> 
  
 </div>
 <div class="cancel-button">
 
   <i class="fa-solid fa-xmark fa-sm"></i>
  
  </div>
 </div>
 <div class="text-area-cont">
 <textarea id="message" spellcheck="false" ></textarea>
 </div>
`
document.body.appendChild(stickyCont);

//for cancel-button
let cancel=stickyCont.querySelector(".cancel-button");
cancel.addEventListener("click",(e)=>{
console.log("remove");
  stickyCont.remove();

});







//for drag and drop


stickyCont.onmousedown = function(event) {

    let shiftX = event.clientX - stickyCont.getBoundingClientRect().left;
    let shiftY = event.clientY - stickyCont.getBoundingClientRect().top;
  
    stickyCont.style.position = 'absolute';
    stickyCont.style.zIndex = 1000;
    document.body.append(stickyCont);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the stickyCont at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      stickyCont.style.left = pageX - shiftX + 'px';
      stickyCont.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the stickyCont on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the stickyCont, remove unneeded handlers
    stickyCont.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      stickyCont.onmouseup = null;
    };
  
  };
  
  stickyCont.ondragstart = function() {
    return false;
  };
  
 
 
 



})




//canvas
//web-gl is used to draw 3-d images.


