import { print, promptForUserInput } from './output.js';
import { add } from "./calc.js";

print(`-----------------------------------------`);
print(`-------------Welcome to Mars-------------`);
print(`-----------------------------------------`);

promptForUserInput(`Would you like to navigate a Rover to help with our mission? [Y/N]`,startAdventure)
// export function showWelcomeMessage(){
// 	userInput.question('Is this example useful? [y/n] ', (answer) => {
// 		  switch(answer.toLowerCase()) {
// 			case 'y':
// 			  console.log('Super!');
// 			  break;
// 			case 'n':
// 			  console.log('Sorry! :(');
// 			  break;
// 			default:
// 			  console.log('Invalid answer!');
// 		  }
// 		  userInput.close();
// 		});
//   }

function startAdventure(answer: string): void {
	console.log(add(5,2));
	print(`${answer}`);
}
