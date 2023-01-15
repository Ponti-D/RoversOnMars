import { print, promptForUserInput } from "./console";
import { RoverHelper } from "./roverHelper";
import { mars } from "./setup-mars";
import { welcomeScreen } from "./app";

let rover = RoverHelper.CreateRover(mars);

export function setupARover(): void {
  print(`Let's set up a Rover`);

  rover = RoverHelper.CreateRover(mars);
  promptForUserInput(
    "Enter the grid values for your rover, with space in between ie. 1 2 N -> ",
    getRoverPosition
  );
}

export function getRoverPosition(answer: string): void {
  const roverposition = answer.split(" ");

  if (roverposition.length < 3) {
    print(`You need to enter three values, X Y and orientation..try again.. `);
    return setupARover();
  }
  const [maxX, maxY] = [...mars.maxGrid];
  const x = parseInt(roverposition[0]);
  const y = parseInt(roverposition[1]);

  if (x > maxX || y > maxY) {
    print(`You exceeded your Mars size of ${mars.maxGrid} try agains..`);
    return setupARover();
  }
  const o = roverposition[2];
  rover.currentGrid = [x, y];
  rover.currentOrientation = roverposition[2];

  print(`------------------------------------------------`);
  promptForUserInput("Enter commands for moving your rover ", getRoverCommands);
}

export function getRoverCommands(answer: string): void {
  if (answer === "" && answer.length > 10) {
    print(`Your commands was too long 10 chars max `);
    setupARover;
  }
  debugger;
  RoverHelper.NavigateRover(rover, answer);

  print(
    `new position for rover is ${rover.currentGrid} ${rover.currentOrientation}`
  );

  promptForUserInput("Want to move rover again? [y/n] ", askifContinue);
}
function askifContinue(answer: string): void {
  if (answer.toLocaleLowerCase() === "y") {
    return setupARover();
  }
  if (answer.toLocaleLowerCase() === "n") {
    return welcomeScreen();
  }
}
