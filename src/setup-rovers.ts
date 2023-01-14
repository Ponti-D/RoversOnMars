import { print, promptForUserInput } from "./output";
import { RoverHelper } from "./roverHelper";
import { mars } from "./setup-mars";
import {welcomeScreen} from ".."; 


let rover = RoverHelper.CreateRover(mars);

export function setupARover(): void {
  print(`Let's set up a Rover`);
  print(
    `You need to place a Rover on the grid somewhere.. Enter X, Y, an a letter for its orientation see doc marsmission`
  );

  promptForUserInput(
    "Enter the values with space in between ie. 1 2 N?",
    getRoverPosition
  );
}

export function getRoverPosition(answer: string): void {
  const roverposition = answer.split(" ");

  if (roverposition.length < 3) {
    print(`You need to enter three values, X Y and orientation..try again.. `);
    return setupARover();
  }

  const x = parseInt(roverposition[0]);

  const y = parseInt(roverposition[1]);
  const o =  roverposition[2];
  rover.currentGrid = [x, y];
  rover.currentOrientation = roverposition[2];

  print(`------------------------------------------------`);
  promptForUserInput("Enter commands for moving your rover ", getRoverCommands);
}

export function getRoverCommands(answer: string): void {
  if (answer !== "") {
    RoverHelper.NavigateRover(rover, answer);
    print(
      `current position is ${rover.currentGrid} ${rover.currentOrientation}`
    );
  }
  promptForUserInput("Want to move rover again? [y/n] ", askifContinue);
}
function askifContinue(answer: string): void {
    if(answer.toLocaleLowerCase()==="y") {return setupARover()};
    if(answer.toLocaleLowerCase()==="n") {return welcomeScreen()};
  
}
