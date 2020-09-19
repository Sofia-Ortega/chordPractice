
//.......................Arrays defining chords.....................
const majorChords = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


let chordCombo = "";
let randIndex;


for(let i = 0; i < majorChords.length; i++) {
    randIndex = Math.floor(Math.random()*7);
    chordCombo = chordCombo + majorChords[randIndex];
}

document.getElementById("words").innerHTML = chordCombo;


