console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection =[]; // created an empty array to hold a collection of album objects

/**
 * Will add albums as objects to the specified collection
 * @param {string} collection 
 * @param {string} title 
 * @param {string} artist 
 * @param {number} yearPublished
 * @param {array} tracks
 * @returns the created album object
 */
function addToCollection(collection, title, artist, yearPublished,tracks){
  let savedAlbum = {            // creating a new object with input parameters
    title:title,
    artist:artist,
    yearPublished:yearPublished,
    tracks:tracks
  };
  collection.push(savedAlbum);    // inserting new object into the specified collection
  return savedAlbum;              // returns the created album
}

/**
 * will log all album objects in a collection of albums as well as all tracks and durations
 * @param {array} collection 
 */
function showCollection(collection){
  collection.forEach((album, index) => {                                                                  // loops through each album in collection using an arrow function
    console.log(`${index + 1}. ${album.title} by ${album.artist}, published in ${album.yearPublished}:`); // logs each albums information preceded by 'index + 1' to increase the number each iteration
    album.tracks.forEach((track, trackIndex) => {                                                         // loops through each track in album using another arrow function
      console.log(`     ${trackIndex + 1}. ${track.name}: ${track.duration}`);                            // logs track information preceded by 'index + 1' same as albums
    });
  });
}
 

/**
 * function to find the albums by artist
 * @param {array} collection 
 * @param {string} artist 
 * @returns an array of the matches
 */
function findByArtist(collection, artist){
  let positiveResults =[];                // local variable for result storage
  for (let album of collection){          // loops through each album in collection
    if (album.artist === artist){         // checks if artist matches
      positiveResults.push(album);        // pushes album to results if true
    }
  }
  return positiveResults;                 // returns the array of results
}

/**
 * function to find albums by artist && yearPublished
 * @param {array} collection  collection name
 * @param {object} searchCriteria  artist && yearPublished
 * @returns an array of albums that match the searchCriteria, or if the data is not provided will return all albums.
 */
function search(collection, searchCriteria) {
  let results = [];                                               
  if (!searchCriteria ||Object.keys(searchCriteria).length <2||searchCriteria.artist === ''|| searchCriteria.yearPublished === ''){ // checks if any disqualifying criteria are met before proceeding
    for (let album of collection){                  // loops through collection
      results.push(album);                          // pushes all albums to results if disqualifying criteria met
    }
    return results;                                 // terminates function early after looping if all albums were pushed
  }else{
    for (let album of collection){                                                                           // loops through collection
      if(searchCriteria.artist === album.artist && searchCriteria.yearPublished === album.yearPublished){    // checks if both criteria are a match
        results.push(album);                                                                                 // pushes positive matches to results
      }
    } return results;                                                                                        // returns results after pushing all matches
  }                            
  }


/*
* adding 6 albums to the array **i reccomend them all!**
* added all tracks and durations as well
*/
console.log(addToCollection(myCollection,'SET IT OFF', 'Offset', 2023,[
  {name:'ON THE RIVER' , duration:'1:36' },
  {name:'SAY MY GRACE(feat. Travis Scott)' , duration:'2:53' },
  {name:'WORTH IT(feat. Don Toliver)' , duration:'3:08' },
  {name:'BROAD DAY(feat. Future)' , duration:'2:48' },
  {name:'FAN' , duration:'2:36' },
  {name:'FREAKY(feat. Cardi B.)' , duration: '3:19'},
  {name:'HOP OUT THE VAN' , duration:'2:00' },
  {name:'DON"T YOU LIE' , duration:'3:11' },
  {name:"I'M ON" , duration:'3:25' },
  {name:'BIG DAWG' , duration:'1:45' },
  {name:'NIGHT VISION' , duration:'3:12' },
  {name:'SKYAMI(feat. Mango Foo)' , duration:'3:33' },
  {name:'DISSOLVE' , duration:'3:07' },
  {name:'FINE AS CAN BE(feat. Latto)' , duration:'3:32' },
  {name:'BUSS MY WATCH' , duration:'1:57' },
  {name:'DOPE BOY(feat. Young Nudy)' , duration:'2:43' },
  {name:'PRINCESS CUT(feat. Chlöe)' , duration:'4:10' }, 
  {name:'JEALOUSY(feat. Cardi B.)' , duration:'2:54' },
  {name:'BLAME IT ON SET' , duration:'3:58' },
  {name:'UPSIDE DOWN' , duration:'2:11' },
  {name:'HEALTHY' , duration:'2:13' },
]));
console.log(addToCollection(myCollection,'ULTRA BLUE', 'Hikaru Utada', 2006,[
  {name:'This is Love' , duration:'4:58'},
  {name:"Keep Tryin'" , duration:'4:53'},
  {name:'BLUE' , duration:'5:15'},
  {name:'日曜の朝' , duration:'4:45'},
  {name:'Making Love' , duration:'4:25'},
  {name:'誰かの願いが叶うころ' , duration:'4:27'},
  {name:'COLORS' , duration:'3:59'},
  {name:'One Night Magic' , duration:'4:39'},
  {name:'海路' , duration:'3:35'},
  {name:'WINGS' , duration:'4:52'},
  {name:'Be My Last' , duration:'4:29'},
  {name:'Eclipse - Interlude-' , duration:'1:32'},
  {name:'Passion - Single Version' , duration:'4:43'},
  {name:'Sanctuary (Opening)' , duration:'4:31'}
]));
console.log(addToCollection(myCollection,'Ceremony', 'Marshmallow', 2024,[
  {name:'Ceremony' , duration:'3:08' }
]));
console.log(addToCollection(myCollection,'Gyrate (ft. Wreckno)', 'Rezz', 2023,[
  {name:'Gyrate (ft. Wreckno)' , duration:'2:56'},
]));
console.log(addToCollection(myCollection,'The Silence is Deafening', 'Rezz', 2016,[
  {name:'Lost' , duration:'3:51' },
  {name:'Edge' , duration:'3:43' },
  {name:'Delusion' , duration:'4:15' },
  {name:'Methodology' , duration:'6:42' },
]));
console.log(addToCollection(myCollection,'Relapse: Refill','Eminem', 2009,[
  {name:'Dr. West - Skit' , duration: '1:29'},
  {name:'3 a.m.' , duration: '5:19'},
  {name:'My Mom' , duration: '5:19'},
  {name:'Insane' , duration: '3:01'},
  {name:'Bagpipes From Baghdad' , duration: '4:43'},
  {name:'Hello' , duration: '4:08'},
  {name:'Tonya - Skit' , duration: '0:42'},
  {name:'Same Song & Dance' , duration: '4:06'},
  {name:'We Made You' , duration: '4:29'},
  {name:'Medicine Ball' , duration: '3:57'},
  {name:'Paul - Skit' , duration: '0:19'},
  {name:'Stay Wide Awake' , duration: '5:19'},
  {name:"Old Time's Sake" , duration: '4:38'},
  {name:'Must Be The Ganja' , duration: '4:02'},
  {name:'Mr.Mathers - Skit' , duration: '0:42'},
  {name:'Deja Vu' , duration: '4:43'},
  {name:'Beautiful' , duration: '6:32'},
  {name:'Crack A Bottle' , duration: '4:57'},
  {name:'Steve Berman - Skit' , duration: '1:29'},
  {name:'Underground' , duration: '6:11'},
  {name:'Forever' , duration: '5:57'},
  {name:'Hell Breaks Loose' , duration: '4:04'},
  {name:'Buffalo Bill' , duration: '3:56'},
  {name:'Elevator' , duration: '4:52'},
  {name:'Taking My Ball' , duration: '5:02'},
  {name:'Music Box' , duration: '5:04'},
  {name:"Drop The Bomb on Em'" , duration: '4:47'},
  {name:'My Darling' , duration: '5:19'},
  {name:'Careful What You Wish For' , duration:'3:47'},
]));

/* CONSOLE LOG TESTS HERE*/
console.log(myCollection);                    // logging myCollection to check the array

showCollection(myCollection);                 // testing the showCollection function

console.log(findByArtist(myCollection, 'Rezz')); // testing the findByArtist function
                                              // tests for search function
let searchObject ={
  artist:'Ray Charles',                       // test object from readme
  yearPublished:1957
}
let searchObject2 = {
  artist:'Rezz',                              // test object for positive case
  yearPublished:2023
}
console.log(search(myCollection,searchObject));
console.log(search(myCollection,searchObject2));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
