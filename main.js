video="";
status="";

function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas=createCanvas(400,350);
    canvas.center();
}

function draw(){
    image(video,0,0,400,350);
}

function start(){
    detector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}

function modelloaded(){
    console.log("Woooooooooooooooooooooooooooooooooooooooow your model is loaded");
    video.loop();
    video.speed(1);
    video.volume(1);
}