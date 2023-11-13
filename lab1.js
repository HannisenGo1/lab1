//Meny för användaren:
// Vänta på input från användaren
//if-sats för vad användaren har skrivit in
//upprepa
const { getQuestion } = require ("./readline.js");
const {uppgiftett, uppgifttwo, uppgifttre, uppgiftfyra, uppgiftfem, uppgiftsex, uppgiftsju} = require ("./uppgifterna.js");

function close (){
	console.log('Avslutar programmet..');
}

async function main() {
const {question } = getQuestion();
let input;


// meny 
 while (input !=='q') {
	console.log();
    console.log('Meny, Välj ett alternativ mellan 1-4:');
    console.log('0. Figur 0');
    console.log('1. Figur 1');
    console.log('2. Figur 2');
	console.log ('3. Figur 3');
	console.log('4. Figur 4');
	console.log ('5.Figur 5');
	console.log('6. Figur 6')
    console.log('Q. Avsluta');

    input = await question('>');
	
	input = input.toLowerCase();


	switch (input) {
	case '0':
		uppgiftett();
		break;
	case '1':
		uppgifttwo();
		break;
	case '2':
	    uppgifttre();
		break;
	case '3':
		uppgiftfyra();
		break;
	case '4':
		uppgiftfem();
		break;
	case '5':
		uppgiftsex();
		break;
	case '6':
		uppgiftsju();
		break;

	case 'q':
		close(); //avslutar programmet
		break;
		default:
			console.log('Ogiltligt, försök igen!');
        }
    }
}
main();
