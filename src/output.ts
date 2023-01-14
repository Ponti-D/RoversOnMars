import * as readline from "node:readline";

let userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function promptForUserInput(
  question: string,
  callback: (answer: string) => void
) {
  userInput.question(`${question}`, callback);
}

export function print(str: string): void {
  console.log(str);
  console.log();
}

 