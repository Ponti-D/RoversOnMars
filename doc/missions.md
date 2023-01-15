
# Mars Mission Background 

This is part of Melody Mars Mission, Rovers are used to navigate around Mars surface to take photos and collect samples and bring it back to Earth. This program helps us to control Rovers movements.

# Assumptions

The Mars Plateau is a rectangular /square shape and is divided into a grid. With minimum lower left of x=0,y=0 by default.
The program will prompt for user for inputs, one line at a time.
A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North, South, West, East respectively.

# How this program works

The program is designed to ask questions from the command line, one question at a time.
The user will be asked to set the max size of Mars Plateau, i.e., a Plateau with maximum (x, y) co-ordinates of (5, 5) input would be -> 5 5 
Then they will be asked to set up a Rover's position and orientation 
Then input commands for Rover's movements 
The Rover's new final position will then be displayed


# After thoughts and initial design changes

To turn this into a mini-application
     I'd consider creating this on a web page or a mobile app.. you could gather all information and represent them all visually. 
	• maybe have different surface as a graphic background that the user can pick as a back-drop? 
	• You can drop a Rover to anywhere on that surface and starting to navigate
	• Maybe the program can have aliens who are out to destroy the Rovers
	• Rovers can have x number of lives or battery level before dead forever?
	• Maybe the program can have some random missions for Rovers to try to accomplish or collecting random things to help keeping batteries level up?
	• You can also add a function to help finding best route to x,y coordinates ?
	• Maybe you can have a map to show you where all the Rovers are on the surface and maybe


# Improvement thoughts on the work
There are three classes:
    • Rover 
    • Mars
    • RoverHelper 
and two interfaces:
    • IRover
    • IMars 
The interfaces created here with future enchantment in mind for different type of rovers and different shape of Mars Plateau

There were functions which I thought of but not implemented for this were:
	• Rover status
	• CheckIfARoverCanMove()    
	• IsGridsFree(x,y)   - checking from UpdateOccupiedGrids(x,y) 
    • UpdateOccupiedGrids(x,y)  - contains all the grids that currently have a rover on it

# Folder structure:
Currently every files for the program is under one folder './src'. Maybe I could have created 
	•  src - code logics
	•  ui -  ui / screens displaying / prompting inputs from users
    • classes -> all the plain classes 

TypeScript - knowledge (lack of)
I found types in TypeScript are hard to get a grip on at the moment, I created types for Orientation and only had to change the type to 'any' to make assignment from user input work. By now I didn't want to re-code the program.
