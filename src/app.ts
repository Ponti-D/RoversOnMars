import { print, promptForUserInput } from "./console";
import { initaliseMars } from "./setup-mars";

export function welcomeScreen() {
  console.clear();
  print(`------------------Welcome to Mars---------------`);
  print(`We are here to collect some sample back to Earth`);
  print(`------------------------------------------------`);

  promptForUserInput(
    `Would you like to navigate a Rover to help with our mission? [Y/N] `,
    doYouWantToPlay
  );
}

function doYouWantToPlay(answer: string): void {
  switch (answer.toLowerCase()) {
    case "y":
      console.log("Super!");
      return promptForUserInput("Press ENTER to continue! ", initaliseMars);
      break;
    case "n":
      console.log("Sorry to hear! :(");
      break;
    default:
      console.log("Invalid answer!");
  }
}
welcomeScreen();
