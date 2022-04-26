/* globals require */
console.log("Hello, Airtable");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key6b3SYbshia9ypy'}).base('appaY3GE4RXbQMrBm');

// Get the "songs" table from the base, specify the view to be "View 2" (which is FILTERED for indie songs and SORTED by rating) and specify the callback functions that will receive each page of data
base("songs")
  .select({
    // add your view in here
    view: "Grid view",
  })
  .eachPage(gotPageOfData, gotAllData, err => {
  if (err) {
    console.error(err)
  }
});

// an empty array to hold our people data
let songs = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of songs
function gotPageOfData(records, fetchNextPage) {
  console.log("gotPageOfData()");
  console.log("There are " + records.length + " items in records");
  // This takes the list of records and add them to the songs array
  songs.push(...records);
  // request more pages
  
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
function gotAllData(err) {
  console.log("gotAllData()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the data
  showData();
}

// show the data on the page
function showData() {
  console.log("showData()");
  
  let albumCoverEl = document.getElementById("album_cover")
  
   // find the shelf element
  const songsContainer = document.querySelector("#container");

   // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
   songs.forEach((song) => {
     // Print out what a single songs's data fields looks like
     console.log("SHOWING THE SONG");
     console.log(song.fields);

    /** CREATE CONTAINER */
     const songContainer = document.createElement("div");
     songContainer.classList.add("songstyleContainer");
     
    /*******************
     ADD COVER ART
    *******************/
     let albumArtElement = albumCoverEl.cloneNode(true)
     albumArtElement.classList.add("cover")
      //console.log(document)
      albumArtElement.src = song.fields.album_cover[0].url;
      albumArtElement.innerText = song.fields.album_cover;
      songContainer.appendChild(albumArtElement);
    
     /*******************
     ADD THE TITLE
     *******************/

     const titleElement = document.createElement("h4");
     titleElement.innerText = song.fields.title;
     songContainer.appendChild(titleElement);
     
     /*******************
     ADD ARTIST TITLE
     *******************/

     const artistElement = document.createElement("p1");
     artistElement.innerText = song.fields.artist;
     songContainer.appendChild(artistElement);

    /*******************
     ADD PRICE
    *******************/

     let priceElement = document.createElement("h4");
     priceElement.innerText = "$" + song.fields.price.toFixed(2);
     songContainer.appendChild(priceElement);
     
    /*******************
     ADD GENRES
     *******************/

     let genresList = song.fields.genre;

    genresList.forEach(function (genre) {
       const genreElement = document.createElement("span");
       genreElement.classList.add("genreTag");
       genreElement.innerText = genre;
       songContainer.appendChild(genreElement);
       // TODO: Add this genre name as a class to the songContainer
      songContainer.classList.add(genre);
    });

    /*******************
     ADD BRANDS
     *******************/
    
    let artistsList = song.fields.artist;

    artistsList.forEach(function (artist) {
       const artistElement = document.createElement("span");
       artistElement.classList.add("artistTag");
       artistElement.innerText = artist;
       songContainer.appendChild(artistElement);
       // TODO: Add this genre name as a class to the songContainer
      songContainer.classList.add(artist);
    });



      /*******************
     ADD URL
     *******************/

    //  let urlElement = document.createElement("h6");
    //  // console.log(song.fields.URL);
    //   urlElement.innerHTML = song.fields.url;
    //   songContainer.appendChild(urlElement);


    // /*******************
    //  LINK TO SOURCE
    //  *******************/

    // let sourceList = song.fields.source;

    // sourceList.forEach(function (source) {
    //    const  sourceElement = document.createElement("h4");
    //    sourceElement.classList.add("sourceTag");
    //    sourceElement.innerText = source;
    //    songContainer.appendChild(sourceElement);

    // //    // TODO: Add this genre name as a class to the songContainer
    //   // songContainer.classList.add(source);
    // });
    



     /***********
      Color Filters
      **********/

      let blackButton = document.getElementById("showBlackButton");
      blackButton.addEventListener("click", function () {
        if (songContainer.classList.contains("Black")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });
 
      let whiteButton = document.getElementById("showWhiteButton");
      whiteButton.addEventListener("click", function () {
        if (songContainer.classList.contains("White")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });
 
      let brownButton = document.getElementById("showBrownButton");
      brownButton.addEventListener("click", function () {
        if (songContainer.classList.contains("Brown")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });
 
      let goldButton = document.getElementById("showGoldButton");
      goldButton.addEventListener("click", function () {
        if (songContainer.classList.contains("Gold")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });

       let greyButton = document.getElementById("showGreyButton");
      greyButton.addEventListener("click", function () {
        if (songContainer.classList.contains("Grey")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });

      let redButton = document.getElementById("showRedButton");
      redButton.addEventListener("click", function () {
        if (songContainer.classList.contains("Red")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });

      let orangeButton = document.getElementById("showOrangeButton");
      orangeButton.addEventListener("click", function () {
        if (songContainer.classList.contains("Orange")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });

      let yellowButton = document.getElementById("showYellowButton");
      yellowButton.addEventListener("click", function () {
        if (songContainer.classList.contains("Yellow")) {
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }
      });

     let greenButton = document.getElementById("showGreenButton");
     greenButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Green")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let blueButton = document.getElementById("showBlueButton");
     blueButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Blue")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let purpleButton = document.getElementById("showPurpleButton");
     purpleButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Purple")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let pinkButton = document.getElementById("showPinkButton");
     pinkButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Pink")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let multiButton = document.getElementById("showMultiButton");
     multiButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Multi")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     /***********
      Brand Filters
      **********/

     let AmazonButton = document.getElementById("showAmazonButton");
    AmazonButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Amazon")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let BAGINCButton = document.getElementById("showBAGINCButton");
     BAGINCButton.addEventListener("click", function () {
       if (songContainer.classList.contains("BAGINC")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let BalenciagaButton = document.getElementById("showBalenciagaButton");
     BalenciagaButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Balenciaga")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let Bottega_VenetaButton = document.getElementById("showBottega_VenetaButton");
     Bottega_VenetaButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Bottega_Veneta")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let ChanelButton = document.getElementById("showChanelButton");
     ChanelButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Chanel")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let ChloeButton = document.getElementById("showChloeButton");
     ChloeButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Chloe")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let DiorButton = document.getElementById("showDiorButton");
     DiorButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Dior")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let Dolce_GabbanaButton = document.getElementById("showDolce_GabbanaButton");
     Dolce_GabbanaButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Dolce_Gabbana")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let EGOButton = document.getElementById("showEGOButton");
     EGOButton.addEventListener("click", function () {
       if (songContainer.classList.contains("EGO")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let GOODNIGHT_MACAROONButton = document.getElementById("showGOODNIGHT_MACAROONButton");
     GOODNIGHT_MACAROONButton.addEventListener("click", function () {
       if (songContainer.classList.contains("GOODNIGHT_MACAROON")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let GoyardButton = document.getElementById("showGoyardButton");
     GoyardButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Goyard")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let GucciButton = document.getElementById("showGucciButton");
     GucciButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Gucci")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let HermesButton = document.getElementById("showHermesButton");
     HermesButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Hermes")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let JacquemusButton = document.getElementById("showJacquemusButton");
     JacquemusButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Jacquemus")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let Louis_VuittonButton = document.getElementById("showLouis_VuittonButton");
     Louis_VuittonButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Louis_Vuitton")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let PEOPSHOPButton = document.getElementById("showPEOPSHOPButton");
     PEOPSHOPButton.addEventListener("click", function () {
       if (songContainer.classList.contains("PEOPSHOP")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let SHEINButton = document.getElementById("showSHEINButton");
     SHEINButton.addEventListener("click", function () {
       if (songContainer.classList.contains("SHEIN")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let Tiger_LyLyButton = document.getElementById("showTiger_LyLyButton");
     Tiger_LyLyButton.addEventListener("click", function () {
       if (songContainer.classList.contains("Tiger_LyLy")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

     let TWENTY_FOURButton = document.getElementById("showTWENTY_FOURButton");
     TWENTY_FOURButton.addEventListener("click", function () {
       if (songContainer.classList.contains("TWENTY_FOUR")) {
         songContainer.style.display = "block";
       } else {
         songContainer.style.display = "none";
       }
     });

  
     
     

     let resetButtton = document.getElementById("resetButton");
     resetButtton.addEventListener("click", function () {
       songContainer.style.display = "block";
     });
     
     songsContainer.appendChild(songContainer);
   });
 }


  let sortHighLow = document.getElementById('sortHighLow');
  sortHighLow.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const songsContainer = document.querySelector("#container");
      songsContainer.innerHTML = "";
      // Sort the songs array according to rating from high to low
      sortRatingHighLow();
    showData();
  });

  function sortRatingHighLow(){
    songs.sort(function(a, b) {
      // For any two songs in the songs array, compare them by their rating number
     return b.fields.rating - a.fields.rating;
    });
  }

  let sortLowHigh = document.getElementById('sortLowHigh');
  sortLowHigh.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const songsContainer = document.querySelector("#container");
       songsContainer.innerHTML = "";
       // Sort the songs array according to rating from low to high
      sortRatingLowHigh();
      showData();
  });

 function sortRatingLowHigh(){
    songs.sort(function(a, b) {
      // For any two songs in the songs array, compare them by their rating number
      // (NOTE THE ORDER HAS SWITCHED)
      return a.fields.rating - b.fields.rating;
    });
 }
