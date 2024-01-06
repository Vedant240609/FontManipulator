function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(150,150)
    canvas=createCanvas(550,500);
    canvas.position(1150,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
    text("Vedant",10,20);
    rightWristx=0;
    leftWristx=0;
    dufference=0;
}
function modelLoaded(){
    console.log("PoseNet is Initialized!")
}
function draw(){
    background("pink");
    fill("white");
}
function textSize(){
textSize=13;
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseX=results[0].pose.nose.x;
        console.log("noseX= "+noseX+"noseY= "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    
        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
