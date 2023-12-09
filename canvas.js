let canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
// let eraserFlag="false";
let download=document.querySelector(".download");

let tool=canvas.getContext("2d");
let mouseDown=false;
let Eraser=document.querySelector(".eraser");
let PencilColor=document.querySelectorAll(".pencilcolor");
let pencilWidthElement=document.querySelector(".slider");
let eraserWidthElement=document.querySelector(".eraserWidth");
let Undo=document.querySelector(".Undo");
let Redo=document.querySelector(".Redo");

let eraserValue=eraserWidthElement.value;
let pencilValue=pencilWidthElement.value;


tool.strokeStyle=PencilColor;

tool.lineWidth=pencilValue;



//mouseDown=> start a new Path
//mouseMove=> fill the Path.
//mouseDown Event
canvas.addEventListener("mousedown",(e)=>{
    //mouseDown is when we click and mouse up event is when we click and get back to normal
    mouseDown=true;
tool.beginPath();
tool.moveTo(e.clientX,e.clientY); //client x and client y are the coordinates where we click using our mouse.
});

canvas.addEventListener("mousemove",(e)=>{

    if(mouseDown)
    {   
         tool.lineTo(e.clientX,e.clientY);
        tool.stroke();

    }


});

//UNDO-REDO
let undoRedoTracker=[];
let track=0;


canvas.addEventListener("mouseup",(e)=>{
mouseDown=false;
let url=canvas.toDataURL();
undoRedoTracker.push(url);
track++;




});



Undo.addEventListener("click",(e)=>{

    // console.log("undo");
    // // console.log
    // console.log(track);

if(track>0){
    track--;
    // console.log(track);
    trackObj={
        trackValue:track,
        undoRedoTracker,
    }

  action(trackObj);
    

}


})

Redo.addEventListener("click",(e)=>{
    // console.log("redo");
    // console.log(track);
 
    if(track<undoRedoTracker.length-1)
    {
        track++;

        trackObj={
            trackValue:track,
            undoRedoTracker
        }
    
// console.log(track);

      action(trackObj);

    }





})

function action(trackObj){
    let valueOftrack =trackObj.trackValue;
    // console.log(valueOftrack);
    let arrOfUrl=trackObj.undoRedoTracker;
    // console.log(undoRedoTracker);
    let url=arrOfUrl[valueOftrack];
    // console.log(url);

let img=new Image();
img.src=url;

img.onload=(e)=>{
    tool.drawImage(img,0,0,canvas.width,canvas.height);
}

}



PencilColor.forEach((value)=>{
    value.addEventListener("click",(e)=>{
        tool.strokeStyle=value.classList[0]

    })
});

pencilWidthElement.addEventListener("change",(e)=>{
    
    tool.lineWidth=pencilWidthElement.value


})


// eraserWidthElement.addEventListener("change",(e)=>{
// eraserFlag=!eraserFlag;

//     if(eraserFlag){

//         tool.strokeStyle="white";
//         tool.lineWidth=eraserValue;
//     }
   

// })


Eraser.addEventListener("click",(e)=>{

   

    if(eraserFlag)
    {
          tool.strokeStyle="white";

          eraserWidthElement.addEventListener("change",(e)=>{
              tool.lineWidth=eraserWidthElement.value;

    
        })

    }


    else{

        tool.strokeStyle=PencilColor;
        tool.lineWidth=pencilValue;
    }

   


})

download.addEventListener("click",(e)=>{
    let  url=canvas.toDataURL();
    let anchor=document.createElement("a");
    anchor.href=url;
    anchor.download="board.jpeg";
    anchor.click();
})