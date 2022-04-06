noseX = 0;
noseY = 0;
diffrence = 0;
rightWristX=0;
leftWristX=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(560,550)
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("postNet is intialized");

}
function gotPoses(results){
    if( results.length  >0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " nose y = "+ noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);
        console.log("leftwristx = " + leftWristX + "rightwristx = "+ rightWristX + "diffrence  = "+ diffrence);


    }
}
function draw(){
    background("#87CEEB");
    document.getElementById("square_size").innerHTML= "Width and height of the quare willbe -" + diffrence + "px";
    fill('#F90093');
    stroke('F90093');
    square(noseX,noseY,diffrence);
}