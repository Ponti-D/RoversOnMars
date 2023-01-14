import { MarsPlateau } from "./mars";
import { print, promptForUserInput } from "./output";
import { RoverHelper } from "./roverHelper";
import { setupARover } from "./setup-rovers";

console.clear();
export let mars = new MarsPlateau(0,0);

export function initaliseMars(): void {

    print(`First, you need to help us set the size of Mars Plateau surface..`);
    print(`------------------------------------------------`);

    promptForUserInput(
        "Enter a pair of numbers for X and Y, values have to be between 0 to 10, for example 10 10? \n",
        giveMarsASize
    );
}

export function giveMarsASize(answer: string): void {
    const number = answer.split(" ");
    console.clear();

    if (number.length < 2) {
        print(
            `You need to enter two numbers with sperate by space ie., 5 5 `
        );
        return initaliseMars();
    }

    let x = parseInt(number[0]);
    let y = parseInt(number[1]);

    if (isNaN(x) || isNaN(x)) {
        print(`That's not a number `);
        return initaliseMars();
    }


    if ((x <= 0 || x > 10) && (y <= 0 || y > 10)) {
        print(`You need to enter two numbers between 0 to 10`);
        return initaliseMars();
    }

    console.clear();
    mars = RoverHelper.initMarsPlateauMaxiCoordinates(x, y);

   print(`Ok .. your Mars Plateau has a maximum grid (x,y)sizes of ${mars.maxGrid}`);
   print(`------------------------------------------------`);
   
    return setupARover();
}

