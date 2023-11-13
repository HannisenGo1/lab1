const readline = require('readline');

function getQuestion(){
    const rl = readline.createInterface ({
	input: process.stdin,
	output:process.stdout });

	 return {
		question: (prompt) => new Promise((resolve) => {
			rl.question(prompt, resolve);
		}),
		close: () => rl.close()
};
}

module.exports = {
	getQuestion
};