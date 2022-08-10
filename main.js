var nosex = 0;
var nosey = 0;


function preload() {
    noise = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(400, 400),
        canvas.center();
    vid = createCapture(VIDEO);
    vid.size(400, 400);
    vid.hide();
    poseNet = ml5.poseNet(vid, modelLoaded);
    poseNet.on('pose', GotPoses);
}

function draw() {
    image(vid, 0, 0, 400, 400);
    image(noise, nosex, nosey, 40, 40);
}

function save() {
    save("Mustache.png");
}

function modelLoaded() {
    console.log("PoseNet is Innitialized");
}
function GotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x-20;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + nosex);
        console.log("nosey = " + nosey);
    }
}