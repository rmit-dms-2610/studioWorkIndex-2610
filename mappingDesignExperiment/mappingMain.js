//// FIND ELEMENTS
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");
const cornflowerSelector = document.getElementById("selectCornflower");
const orchidSelector = document.getElementById("selectOrchid");

//// INIT VARIABLES
let stageWidth = stageContainer.offsetWidth;
let stageHeight = stageContainer.scrollHeight;

//// KONVA SETUP

// first create stage
const stage = new Konva.Stage({
    container: "konva-stage",
    width: stageWidth,
    height: stageHeight
});

// then first layer
const baseLayer = new Konva.Layer();

//drawCircle();

// add layer to stage
stage.add(baseLayer);

//// DRAWING FUNCTION

let circleColour = "red";

function drawCircle(){
    // create circle
    let initCircle = new Konva.Circle({
        x: stageWidth * Math.random(),
        y: stageHeight * Math.random(),
        radius: 50 * Math.random(),
        fill: circleColour
    });

    // add circle to layer
    baseLayer.add(initCircle);
}

circleButton.addEventListener("click", drawCircle);

//// colour change input
// This one is pretty easy, I'm going to store values of the appropriate colour value in each of the radio
// options, so that when selected they change to the appropriate colour. As the radio is explicitly exlusive
// selections I don't need to worry about mixing. I chose this very limited input as it is clear to users
// that they can only make a limited selection, and as a designer this gives me more explicit control over
// the colour palette available on the page. It also expresses what I as a designer consider a 'good' mix of colours

// this function will be assigned via addEventLister so it will accept an event as its parameter and then
// find the value based off which radio button was clicked
function setCircleColour(selectEvent) {
    // retrieve colour value
    const newColour = selectEvent.target.value;
    // test to see if we found the correct value
    // console.log(newColour);
    circleColour = newColour;
}

// now we add our event listeners : as the function works on the event it can be used for each
cornflowerSelector.addEventListener("click", setCircleColour);
orchidSelector.addEventListener("click", setCircleColour);