

//variables for the javascript code are established and defined
//the corrisponding css is also linked

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

//the intial display of an RGB color is input into the top text div and the connection to the picked color variable is established
//the inital color squares are placed on the page
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

//a fuction for a variable number of squares is establisehd within the tag that was initated in the section above the background colors are ransomized
//an event listener is added to the a click selection of one of the ransomized square prompting an if else function

//an if statment is created for the selection of the colored square
//an event listener is added with a click function
//if the "clicked color" is the correct "picked color" then the message "correct" will be displayed
//a reset button will also be displayed prompting you to "play again" 
//all the colored boxes will change to the correct "picked color"

//if the correct color is not selected then the background color of that square changes to grey making it not visable anylonger
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

//a function for the mode selection is established within the tag that was initated in the first section
//an event listener is added to the a click selection of one of the mode buttons
//the display will remove the items not associated with the selection

//the class list selected is added and an if statment is created
//if the "easy" text is slected then 3 squares will apprear on the screen
//if anyhting else is selected then the numbers of squares will reamin as 6

//the fuction resets in order to be performed multipul times


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

//a function fo the color reset is established within the tag that was initated in the first section
//the funtction promptes the colors to be randomized within the squares
//a picked color is established as the one being sought out by the game
//a reset button is connected to the "new colors" text

//the styled display of the squares is establsuj in a if statment 
//if there is a color present then the display will be "block" and teh background color will mimick the one established
//if not color is present there will be no display of the square

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

//the fuction for a changed color is established where the background color always changes to the selected color

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

//the fuction for choosing a random color is established 
//the colors will always return back randomly

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//the fuction for generating a random color is established for every initaiton to make a color 
//the return is variably agragated

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

//the fuction for generating a RGB color is established by randomly assigning a number from 0-256 
//the return adds commas between the randomly selected numbers

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
