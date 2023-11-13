const { getQuestion } = require ("./readline.js");
 

//uppgift 1 
function uppgiftett(input) {
	for ( let i =1; i <=6; i++) {
		let text ='';
		for (let j= 1; j <=8; j++) {
			text += (j <=1) ? '#' : '.'; //om j är mindre eller lika med 1 lägg till # annars .
		}
		console.log(text);
	}
 }
 //uppgift 2
function uppgifttwo(input) {
    for (let i=1; i <= 6; i++){
		let text = '';
		for(let j=1; j <=8; j++){
			text += (j === i) ? '#' : '.'; // if j=i lägg till #, else punkt (.) 
		}
		console.log(text);
	}
 }
//uppgift 3
function uppgifttre (input) {
	for (let i=1; i <=6; i++){
		let text ='';
		for(let j=1; j <=8; j++){
			text += (j <= 2) ? '.' : (j<=5) ? '#' : '.';
		}
		console.log(text);
	}
 }
 
//uppgift 4	
function uppgiftfyra (input) {

      for (let i = 1; i <= 6; i++) {
        let text = ( i===3 ) ? '########' : '..#.....';
        console.log(text);
      }
}

//uppgift 5
function uppgiftfem (input) {
	const listaa = [
	'....##..',
	'....#...',
	'...##...',
	'..#.#...',
	'.#..#...',
	'#...#...' 	
	];
	for (let i=0; i < listaa.length; i++) {
		console.log(listaa[i]);
	}
}
//uppgift 6
function uppgiftsex (input) {
const uppgsex =[
'#....#..',
'.#..#...',
'..##....',
'..##....',
'.#..#...',
'#....#..'
];
for (let i= 0; i < uppgsex.length; i++) {
console.log(uppgsex[i]);
}
}
//uppgift 7
// % kontrollerar om j är udda, då lägger?  # till i sträng , else punkt.
function uppgiftsju(input) {
	for (let i = 1; i <=6; i++) {
		let text= '';
		for(let j = 1; j <=8; j++) {
			text += (j% 2 ===1) ? '#' : '.';
		}
		console.log(text);
	}
}

module.exports = {
	uppgiftett, uppgifttwo, uppgifttre, uppgiftfyra, uppgiftfem, uppgiftsex, uppgiftsju
};
 