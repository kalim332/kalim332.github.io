/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);
// use the airtable library to get a variable that represents one of our bases
// We needed to put in the right apiKey and
// base ID here!
var base = new Airtable({ apiKey: "key6b3SYbshia9ypy" }).base(
  "appwgcxz249vF9glz"
 );
 
 //get "books" from table from airtable database
//base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);


//ADD VIEW to get a select "view" "books" from table from airtable database
base("books").select({
  view: "main"
}).eachPage(gotPageOfBooks, gotAllBooks);

//empty array to hold our book data
var books = [];

//function that recieves our data
function gotPageOfBooks(records, fetchNextPage){
    console.log("gotPageOfBooks()");
    //add the records from this page to our books array
    books.push(...records);
    //request more pages
    fetchNextPage();
}

//call function 
function gotAllBooks(err) {
    console.log("gotAllBooks()");

    //report an error 
    if (err) {
        console.log("error loading books");
        console.error(err);
        return;
    }

    //call functions to log and show books 
    // consoleLogBooks();
    showBooks();
}

////////////////////////////////////////////////////////
//ADD THIS CODE, Lines 43-63
// create the book-spines on the shelf
function showBooks() {
  console.log("showBooks()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
  books.forEach((book) => {
    // create the div, set its text and class
    const div = document.createElement("div");
    // div.innerText = book.fields.name;
    // div.innerText = book.fields.price;
    div.src = book.fields.image;

    div.classList.add("book-spine");
    // when the user clicks this book spine, call showBook and send the book data and this spine element
    div.addEventListener("click", () => {
      showBook(book, div);
    });
    // put the newly created book spine on the shelf
    shelf.appendChild(div);
  });
}


// show the detail info for a book, and highlight the active book-spine
function showBook(book, div) {
  console.log("showBook()", book);

  // find the book detail element
  const bookDetail = document.getElementById("book-detail");

  // populate the template with the data in the provided book
  bookDetail.getElementsByClassName("source")[0].href = book.fields.source;

  // remove the .active class from any book spines that have it...
  const shelf = document.getElementById("shelf");
  const bookSpines = shelf.getElementsByClassName("active");
  for (const bookSpine of bookSpines) {
    bookSpine.classList.remove("active");
  }
  // ...and set it on the one just clicked
  div.classList.add("active");

  // reveal the detail element, we only really need this the first time
  // but its not hurting to do it more than once
  bookDetail.classList.remove("hidden");
}

function hideBook(book, div) {
  // find the book detail element
  const bookDetail = document.getElementById("book-detail");

  // hide the book info
  bookDetail.classList.add("hidden");

  // remove the .active class from any book spines that have it
  const shelf = document.getElementById("shelf");
  const bookSpines = shelf.getElementsByClassName("active");
  for (const bookSpine of bookSpines) {
    bookSpine.classList.remove("active");
  }
}




// amazon filter
document.querySelector("#amazon").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  // // hide the book detail data in case it clashes
  // hideBook();
  // removes each book currently on the shelf
  bookSpines.forEach(book => {
    book.remove();
  });
  // clear the array to make way for new info
  books = [];
  base("books").select({
    view: "amazon"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});




//  let sortLowHigh = document.getElementById('sortLowHigh');
//  sortLowHigh.addEventListener("click", function(){
//      // Clear the container div (remove all the previous elements)
//      const bookSpines = document.querySelector(".book-spine");
//      bookSpines.innerHTML = "";
//       // Sort the songs array according to rating from low to high
//      sortpriceLowHigh();
//      showData();
//  });

// function sortpriceLowHigh(){
//    books.sort(function(a, b) {
//      // For any two songs in the songs array, compare them by their rating number
//      // (NOTE THE ORDER HAS SWITCHED)
//      return a.fields.price - b.fields.price;
//    });
//  }
