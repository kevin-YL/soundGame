// "typing" effect for game instructions, where characters are appended
// to a container element with 65ms delay between characters

var i = 0;
var p1Text =
  "Welcome to the Light and Sound Memory Game! \
Repeat the pattern you hear by pressing the buttons";
var container = document.getElementById("pText");

function type(string) {
  if (i < p1Text.length) {
    if (i === 44) {
      let br = document.createElement("br");
      container.appendChild(br);
    }
    container.innerHTML += p1Text.charAt(i);
    i++;
    setTimeout(type, 65);
  }
}
type(p1Text);

// generating a random array of length 8 and appending values
// from 1-5 to represent game buttons
var arrayLength = 8;
var pattern = [];

function createRandomArray() {
  for (let i = 0; i < arrayLength; i++) {
    pattern.push(Math.floor(Math.random() * 5 + 1));
  }
}
createRandomArray();

// global constants
const cluePauseTime = 333; //how long to pause between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of clue sequence

// global variables
var clueHoldTime = 1000; // how long to hold each clue's light & sound - decrements as game goes on
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be 0.0 <---> 1.0
var guessCounter = 0;
var strikes = 0; // initialized to 1 due to game logic - user will fail on 3 missed guesses

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  pattern = [];
  createRandomArray();
  clueHoldTime = 1000;
  // hide start/show stop depending on user input
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// functions for lighting & clearing buttons

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (strikes === 3) {
    loseGame();
  }

  if (gamePlaying) {
  }
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; // delay === initial wait time

  // for each clue revealed so far
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (strikes === 3) {
    loseGame();
  }
  if (pattern[guessCounter] == btn) {
    // user guessed correctly
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //  won the game
        winGame();
      } else {
        //user got the pattern correct => onto next sequence
        progress++;
        if (clueHoldTime >= 200) {
          clueHoldTime -= 100;
          playClueSequence();
        }
      }
    } else {
      // check user's next guess
      guessCounter++;
    }
  } else {
    strikes += 1;
    playClueSequence();
  }
}

// handle user Win/Loss
function loseGame() {
  strikes = 0;
  stopGame();
  alert("Game over..you lost.");
}

function winGame() {
  strikes = 0;
  stopGame();
  alert("Game over, you won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 502,
  6: 565.6
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
