/*
Author: Bhavik Makhija
Title: light game
Description: this is a simple light game! If you get the right order all lights will turn on.
*/

//checks how many right in a row
var tracker = 0;

//has an array to check which light should be on or off
var lightStat = [0, 0, 0, 0, 0, 0, 0, 0];

//win counter
var winCount = 0;

//click counter
var clickCounter = 0;

function setup() {
    createCanvas(700, 400);
}

function draw() {
    //gray background
    //if user wins they get a blue background
    if (winCount == 0 && clickCounter < 50) {
        background(220);
    } else {
        background("blue");
    }

    if (clickCounter >= 50) {
        background("purple");
    }

    //makes bricks for a castle like feeling

    for (var i = 0; i < width; i += 200) {
        for (var j = 0; j < height; j += 100) {
            //makes rectangles with stroke line to create a brick feeling
            if (winCount == 0 && clickCounter < 50) {
                fill(220);
            } else if (clickCounter >= 50) {
                fill("purple");
            } else {
                fill("blue");
            }
            rect(i, j, 200, 100);
        }
    }

    for (var i = 0; i < 6; i++) {
        //creates 6 buttons
        fill("red");
        ellipse(100 + i * 100, 300, 80, 80);
    }

    for (var j = 0; j < 9; j++) {
        if (lightStat[j] == 0) {
            fill("black");
            //light is black is stat says 0
        } else if (lightStat[j] == 1) {
            fill("yellow");
            //light is on if stat says 1
        }
        //creates lights
        rect(50 + j * 70, 50, 50, 50);
    }

    //checks if 3 right ones have been clicked in a row
    if (tracker == 3) {
        //reset clicks
        clickCounter = 0;

        for (var j = 0; j < 9; j++) {
            //turns all on
            lightStat[j] = 1;
        }
        //prints u win
        textSize(10);
        text('YOU WIN press c to play again', 10, 10);

        //displays number of wins
        text('You have won ' + winCount + " times", 10, 30);
    }

    //if user clicks too may times
    if (clickCounter >= 50) {
        text("Super Unlucky", 10, 30);
    }

    //if mouse is pressed
    if (mouseIsPressed) {
        //tracks number of clicks
        clickCounter++
        for (var j = 0; j < 9; j++) {
            //turns all lights off if 3 havent been clicked
            if (tracker != 3)
                lightStat[j] = 0;
        }
        if ((mouseX > 60) && (mouseX < 140) &&
            (mouseY > 260) && (mouseY < 340)) {
            //turns a few lights on and tracks the number of lights right in a row
            lightStat[1] = 1;
            lightStat[5] = 1;
            tracker = 1;
        } else if ((mouseX > 160) && (mouseX < 240) &&
            (mouseY > 260) && (mouseY < 340)) {
            //turns a few lights on and tracks the number of lights right in a row
            tracker = 0;
            lightStat[3] = 1;
            lightStat[7] = 1;
        } else if ((mouseX > 260) && (mouseX < 340) &&
            (mouseY > 260) && (mouseY < 340)) {
            //turns a few lights on and tracks the number of lights right in a row
            lightStat[8] = 1;
            lightStat[0] = 1;
            if (tracker == 1) {
                tracker = 2;
            }
        } else if ((mouseX > 360) && (mouseX < 440) &&
            (mouseY > 260) && (mouseY < 340)) {
            //turns a few lights on and tracks the number of lights right in a row
            tracker = 0;
            lightStat[5] = 1;
            lightStat[2] = 1;
            lightStat[4] = 1;
        } else if ((mouseX > 460) && (mouseX < 540) &&
            (mouseY > 260) && (mouseY < 340)) {
            //turns a few lights on and tracks the number of lights right in a row
            tracker = 0;
            lightStat[7] = 1;
            lightStat[1] = 1;
            lightStat[2] = 1;
        } else if ((mouseX > 560) && (mouseX < 640) &&
            (mouseY > 260) && (mouseY < 340)) {
            //turns a few lights on and tracks the number of lights right in a row
            lightStat[3] = 1;
            lightStat[2] = 1;
            lightStat[8] = 1;
            if (tracker == 2) {
                tracker = 3;
                winCount++;
            }
        }
    }

    //checks if a key is pressed
    if (keyIsPressed) {
        //c will reset everything 
        if (key == "c")
            tracker = 0;
        for (var j = 0; j < 9; j++) {
            lightStat[j] = 0;
        }
    }


}