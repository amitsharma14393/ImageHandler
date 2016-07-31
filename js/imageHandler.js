"use strict";
window.onload=function(){
    var canvas=document.getElementById('myCanvas');
    var context=canvas.getContext('2d');
    
    var loadImage=document.getElementById("loadImage");
    
    var message=document.getElementById("message");
   
    var zoomIn=document.getElementById("zoomIn");
    
    var zoomOut=document.getElementById("zoomOut");
    
    var rotateLeft=document.getElementById("rotateLeft");
    
    var rotateRight=document.getElementById("rotateRight");
    
    var img=new Image();
    img.src="../images/shahrukh.jpg";
    
    var rotateLeftRightAngle=0;
    
    var currentAngle=0;
    
    var zoomInOrOutBy=0.1;
    
    var currentScale=1;
    
    //To load Image and message
    loadImage.onclick=function(){
    draw();
    message.style.display="block";    
    };
    
    //clearRect method clears any previously drawn content
    function draw(){
       // context.setTransform(1,0,0,1,0,0);  //identity matrix
        context.clearRect(0,0,canvas.width,canvas.height);
        context.save();
        context.scale(currentScale,currentScale);
        context.rotate(currentAngle*Math.PI/180);
        context.drawImage(img,0,0,canvas.width,canvas.height);
        context.restore();
    }
    
    //To Zoom In 
    zoomIn.onclick=function(){
        currentScale=currentScale-zoomInOrOutBy;
        draw();
    }
    
    //To Zoom Out
    zoomOut.onclick=function(){
        currentScale=currentScale+zoomInOrOutBy;
        draw();
    }
    
    //To Rotate Left
    rotateLeft.onclick=function(){
        rotateLeftRightAngle=90;
        currentAngle =currentAngle+rotateLeftRightAngle;
        draw();
    }
    
    //To Rotate Right
    rotateRight.onclick=function(){
        rotateLeftRightAngle=-90;
        currentAngle=currentAngle+rotateLeftRightAngle;
        draw();
    }
    
}

