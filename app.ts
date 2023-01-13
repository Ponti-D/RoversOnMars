import { print, promptForUserInput } from "./src/output";

print(`-----------------------------------------`);
print(`-------------Welcome to Mars-------------`);
print(`We are here to collect some sample`);

promptForUserInput(
  `Would you like to navigate a Rover to help with our mission? [Y/N]`,
  startAdventure
);

function startAdventure(answer: string): void {
  print(`${answer}`);

  switch (answer.toLowerCase()) {
    case "y":
      console.log("Super!");
      break;
    case "n":
      console.log("Sorry! :(");
      break;
    default:
      console.log("Invalid answer!");
  }
}
//