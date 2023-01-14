import {print, promptForUserInput } from "./output";
import { MarsPlateau } from "./mars";
import { RoverHelper } from "./roverHelper";
 
console.clear();


export function getMarsPlateauSizeGrids(): void {
    
    print(`------------------------------------------------`);
    print(`--`);
    print(`First, you need to help us set the size of Mars Plateau surface..`);
    print(`------------------------------------------------`);
    
    promptForUserInput('Enter a pair of numbers for X and Y, values have to be between 0 to 10, for example 10 10 ?', giveMarsASize);
    
      
  }

 export function giveMarsASize(answer: string ):void{
    const number =  answer.split(' ');
    console.clear();
    print(`you entered ${answer}`);

    if(number.length <2){
        print(`1 You need to enter a set of two number with sperate by space ie., 5 5 `);
		return getMarsPlateauSizeGrids();
    } 

   let x = parseInt(number[0]);
   let y = parseInt(number[1]);

   if(x <=0 && y <=0 ){
    print(`2 You need to enter a set of two number between 0 to 10`);
    return getMarsPlateauSizeGrids();
   }
   
   return setMarsSize(x,y);
   
 }

 export function setMarsSize(x:number,y:number):void{
    console.clear();
    const userMars = new MarsPlateau(x,y);
    print(`Ok .. your Mars Plateau has a maximum grid sizes of x= ${x} y=${y}`);
    
    
 }