console.log("Hello bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

//use airtable library 
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key6b3SYbshia9ypy'}).base('apptWFWOIyu6iugUf');

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
    div.innerText = book.fields.title;
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
  bookDetail.getElementsByClassName("title")[0].innerText = book.fields.title; //
  bookDetail.getElementsByClassName("cover-image")[0].src =
  book.fields.cover_image[0].url;
  bookDetail.getElementsByClassName("description")[0].innerText =
    book.fields.description;
  bookDetail.getElementsByClassName("more")[0].href = book.fields.more;

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

// all filter
document.querySelector("#all-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  // hide the book detail data in case it clashes
  hideBook();
  // removes each book currently on the shelf
  bookSpines.forEach(book => {
    book.remove();
  });
  // clear the array to make way for new info
  books = [];
  base("books").select({
    view: "main"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// photography filter
document.querySelector("#photography-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "photography"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// artist filter
document.querySelector("#artist-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "artist"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// intersectionality filter
document.querySelector("#intersectionality-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "intersectionality"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// culture filter
document.querySelector("#culture-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "culture"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// conflict filter
document.querySelector("#conflict-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "conflict"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// typography filter
document.querySelector("#typography-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "typography"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// illustration filter
document.querySelector("#illustration-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "illustration"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});

// humor filter
document.querySelector("#humor-filter").addEventListener("click", () => {
  // loop through the books loaded from the Airtable API
  const bookSpines = document.querySelectorAll(".book-spine");
  hideBook();
  bookSpines.forEach(book => {
    book.remove();
  });
  books = [];
  base("books").select({
    view: "humor"
  }).eachPage(gotPageOfBooks, gotAllBooks);
});


// START BY COMMENTING THIS OUT, and push it to the bottom of your code > this block was formerly lines 41-56
// PART 1.1 > post list of book titles to site 
// loop through the books and console log the data
// function consoleLogBooks() {
//     console.log("consoleLogBooks()");
//     books.forEach((book) =>{
//         console.log("Book:", book);
//     });
// }

// function showBooks(){
//     console.log("showBooks()");
//     books.forEach((book) =>{
//         const h2 = document.createElement("h2");
//         h2.innerText = book.fields.title;
//         document.body.appendChild(h2);
//     });
// }




// PART 1.0 > Airtable boiler plate JS 
// base('Table 1').select({
//     // Selecting the first 10 records in Grid view:
//     maxRecords: 10,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Name'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });