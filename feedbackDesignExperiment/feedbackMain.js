//// FIND ELEMENTS
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");
const mainElement = document.getElementById("mainElm");

//// TONE INIT
// set up our basic synth
const synth = new Tone.Synth().toDestination();

// run after user interaction
async function toneInit(){
    await Tone.start();
    console.log("close");
}

//// DIALOG INIT
// show modal on page load
introDialog.showModal();

dialogCloseButton.addEventListener("click", () => {
    introDialog.close();
});

introDialog.addEventListener("close", toneInit);

//// SOUND FUNCTIONS

function playNote(){
    // trigger C4 eighth note on synth
    synth.triggerAttackRelease("C4", "8N");
}

//playButton.addEventListener("click", playNote);

function noteOn() {
    synth.triggerAttack("C4", Tone.now());
}

playButton.addEventListener("mousedown", () => {
    noteOn();
    mainElement.style.backgroundColor = "red";
});

function noteOff() {
    synth.triggerRelease();
}

playButton.addEventListener("mouseup", () => {
    noteOff();
    mainElement.style.backgroundColor = "white";
});