

//variables for the javascript code are established and defined
//the corresponding css is also linked

var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

//the initial display of an RGB color is input into the top text div and the connection to the picked color variable is established
//the initial color squares are placed on the page
//the Easy/Hard mode selector is placed on the page
//the reset button is placed on the page

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

//an event listener is added to the reset button so that the reset function applies on click

resetButton.addEventListener("click", function() {
	reset();
});

//a function for a variable number of squares is established within the tag that was initiated in the section above
//the background colors are randomized
//an event listener is added to the click selection of one of the randomized square prompting an if else function
 
//an if statement is created for the selection of the colored square
//an event listener is added with a click function
//if the "clicked color" is the correct "picked color" then the message "correct" will be displayed
//a reset button will also be displayed prompting you to "play again"
//all the colored boxes will change to the correct "picked color"
 
//if the correct color is not selected then the background color of that square changes to gray making it no longer visible
//the message "try again" will also appear
 
function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

//a function for the mode selection is established within the tag that was initiated in the first section
//an event listener is added to the a click selection of one of the mode buttons
//the display will remove the items not associated with the selection
 
//the class list selected is added and an if statement is created
//if the "easy" text is selected then 3 squares will appear on the screen
//if anything else is selected then the numbers of squares will remain as 6
 
//the function resets in order to be performed multiple times


function setupMode() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			reset();
		});
	}
}
 
//a function for the color reset is established within the tag that was initiated in the first section
//the function prompts the colors to be randomized within the squares
//a picked color is established as the one being sought out by the game
//a reset button is connected to the "new colors" text
 
//the styled display of the squares is established in a if statement
//if there is a color present then the display will be "block" and the background color will mimic the one established
//if no color is present there will be no display of the square

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

//the function for a changed color is established where the background color always changes to the selected color

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

//the function for choosing a random color is established 
//the colors will always return back randomly

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//the function for generating a random color is established for every initiation to make a color
//the return is variably aggregated

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

//the function for generating a RGB color is established by randomly assigning a number from 0-256 three times
//the return adds commas between the randomly selected numbers giving it proper syntax

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
