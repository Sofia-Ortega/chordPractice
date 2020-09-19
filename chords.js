
//.......................Arrays defining chords.....................
const majorChords = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const minorChords = ['Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'];

//.......................Defining variables..........................
let chordCombo = "";
let randIndex;

//.......................Looping to get combo........................
for(let i = 0; i < majorChords.length; i++) {
    //randIndex = Math.floor(Math.random()*7);
    randIndex = randNum(0,7)
    chordCombo = chordCombo + majorChords[randIndex] + " ";
}

//.......................Output.......................................
document.getElementById("chords").innerHTML = chordCombo;


//........................Functions...............................
function randNum(start, end) {
    return Math.floor((Math.random()*(end+start))+start)
}