
//.......................Arrays defining chords.....................
const majorChords = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const minorChords = ['Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'];

//.......................Variables..........................
let chordCombo = "";
let numOfChords;


//.......................Chord generator........................
function chordGen() {
    //getting user input
    numOfChords = document.getElementById("chordNumber").value

    //generating
    for (let i = 0; i < numOfChords; i++) {

        let k = randNum(0, 1);
        if (k === 0) {
            chordCombo = chordCombo + majorChords[randNum(0, 6)] + " ";
        } else {
            chordCombo = chordCombo + minorChords[randNum(0, 6)] + " ";
        }

    }


    document.getElementById("chords").innerHTML = chordCombo;

}
//........................Lesser Functions...............................
//random number generator (start and end inclusive)
function randNum(start, end) {
    return Math.floor((Math.random()*(end-start+1))+start)
}

