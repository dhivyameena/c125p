difference=0;
leftWrist=0;
rightWrist=0;

function setup() {
    canvas=createCanvas(550, 500);
    canvas.position(560, 150);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('model is loaded');
}

function draw() {
    background('#ffc0c0');
    textSize(20);
    fill('#566fff');
    text('Dhivya', 50, 100) 
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

      
    }
}