ny = 0;
nx = 0;
rwx = 0;
lwx = 0;
sl = 0;

function setup() {
canvas = createCanvas(550,550);
canvas.position(1000,250);
video = createCapture(VIDEO);
video.size(550,500);
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("पोज नेट जागा हुआ है");

}

function gotposes(results){

    if(results.length>0){
        console.log(results);
        ny = results[0].pose.nose.y;
        nx = results[0].pose.nose.x;
    console.log("x and y coordinates of naak are = "+nx+"and"+ny);
       rwx = results[0].pose.rightWrist.x;
       lwx = results[0].pose.leftWrist.x;
       console.log("x coordinates of lw and rw  are = "+lwx+"and"+rwx); 
       sl =floor(lwx-rwx) ;
       console.log(sl);
    }
    
}


function draw(){
    background("white");
    fill(255,233,15);
    stroke(255,255,255);
    
    document.getElementById("insize").innerHTML="Size of The Font  is: "+sl;
    
text("OP",nx,ny);
 
textSize(sl)
}
