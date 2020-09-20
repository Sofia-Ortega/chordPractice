
//.......................Arrays defining chords.....................
const majorChords = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const minorChords = ['Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'];

//.......................Defining variables..........................
let chordCombo = "";
var didUserClick = false;
let numOfChords;


//.......................Chord generator........................
function chordGen() {
    let numOfChords = document.getElementById("chordNumber").value
    document.getElementById("testing").innerHTML = numOfChords

    for (let i = 0; i < numOfChords; i++) {

        let k = randNum(0, 1);
        if (k === 0) {
            chordCombo = chordCombo + majorChords[randNum(0, 6)] + " ";
        } else {
            chordCombo = chordCombo + minorChords[randNum(0, 6)] + " ";
        }

    }

//.......................Output.......................................
    document.getElementById("chords").innerHTML = chordCombo;

}
//........................Functions...............................
//random number generator (start and end inclusive)
function randNum(start, end) {
    return Math.floor((Math.random()*(end-start+1))+start)
}

//if user click, return userClick true
function userClick() {
    didUserClick = true;
}