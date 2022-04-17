// a simple JS interaction

//create a variable that selects our currently hidden h1 with a class of 'welcome-text'
const welcomeText = document.querySelector(".welcome-text");

// then, define a function called "buttonClick" which toggles a class of "visible" on and off on every button click
// this works because we have an onclick property in our html button above
function buttonClick() {
  welcomeText.classList.toggle("visible");
}
