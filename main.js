function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    circle(30,30,60)
    circle(30,350,60)
    circle(450,30,60)
    circle(450,350,60)
    rect(18,60,25,260)
    rect(438,60,25,260)
    rect(56,23,368,20)
    rect(56,338,368,20)
    image(video,70,75,340,240);
}
function take_snapshot(){
    save('vinayak.png')
}