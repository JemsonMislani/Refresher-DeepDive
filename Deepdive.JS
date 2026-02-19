// ES6 CHALLENGE // 

// CHALLENGE 1, ARROW FUNCTION + TEMPLATE LITERAL // 

function introduceNameAge(name, age){
    return `Hi my name is ${name}, I am ${age} years old.`
};

const intro = (name, age) => {
    return `Hi im ${name}, ${age} years old`;
};
console.log(intro('Jem', 27));

// CHALLENGE 2, DESTRUCTURING // 

const song = {
    title: 'Amazing grace',
    artist: 'Sarah',
    year: 1999
};

const {title, artist} = song;
console.log(`${title} - ${artist}`);

// CHALLENGE 3, SPREAD OPERATOR // 

const chords1 = ["C", "G", "Am"];
const chords2 = ["F", "Dm"];

const spread = [...chords1,...chords2];
console.log(spread);

// CHALLENGE 4, USE .MAP // 

const nms = [1, 2, 3, 4, 5];

const multiByThree = nms.map(m => m * 3);
console.log(multiByThree);


// CHALLENGE 5, FILTER //

const songs = [
  { title: "Song A", premium: true },
  { title: "Song B", premium: false },
  { title: "Song C", premium: true }
];

const onlyTrue = songs.filter(tr => tr.premium);
console.log(onlyTrue);

// ---------------------- // 

// ANOTHER CHALLENGES FOR .MAP, .FILTER, .REDUCE // 

const numbers = [1, 2, 3, 4, 5];

// Task: Use map to create a new array of squares
// Expected output: [1, 4, 9, 16, 25]

const multiByItself = numbers.map(mul => mul * mul );
console.log(multiByItself);


// FILTER // 

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 30 }
];

// Task: Use filter to get people who are 18 or older
// Expected output: [
//   { name: "Bob", age: 22 },
//   { name: "David", age: 30 }
// ]

const older = people.filter(old => old.age >= 18);
console.log(older);

// REDUCE // 

const cart = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Hat", price: 10 }
];

// Task: Use reduce to calculate the total price
// Expected output: 60

const total = cart.reduce((total, itm) => total + itm.price, 0);
console.log(total);

// BONUS // 

const arr = [[1,2], [3,4], [5]];
// Expected output: [1,2,3,4,5]


const flattened = arr.reduce((flat, nums) => {
    return flat.concat(nums);
});

console.log(flattened);

// MIXED CHALLENGES // 

const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Tenet", year: 2020, rating: 7.5, genre: "Sci-Fi" },
  { title: "Joker", year: 2019, rating: 8.5, genre: "Drama" },
];

// .map() – Create an array of movie titles.

// Expected: ["Inception", "Interstellar", "The Dark Knight", "Tenet", "Joker"]

// .filter() – Get only Sci-Fi movies with rating >= 8.0.

// Expected:

// [
//   { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
//   { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" }
// ]


// .find() – Find the first movie released after 2015.

// Expected: { title: "Tenet", year: 2020, rating: 7.5, genre: "Sci-Fi" }

// .reduce() – Calculate the average rating of all movies.

// Hint: sum all ratings then divide by array length

// Expected: 8.48 (approx)

// ANSWER 1 .MAP // 
const movieTitle = movies.map(tit => tit.title);
console.log(movieTitle);

//ANSWER 2 .FILTER //

const rating = movies.filter(r => r.genre === 'Sci-Fi' && r.rating >= 8.0);
console.log(rating);

// ANSWER 3 .FIND // 

const firstRel = movies.find(mov => mov.year > 2015);
console.log(firstRel)

// ANSWER 4 .REDUCE // 

const overAllRate = movies.reduce((rate, movie) => rate + movie.rating / movies.length, 0
);

console.log(overAllRate);

// BONUS // 
/*
Bonus Challenge
Use all four methods together:
Filter Sci-Fi movies
Map to titles
Find the title that includes "Inter"
Reduce to count total letters in that title
*/

const movieTit = movies.filter(m => m.title);
console.log(movieTit);

const titlesMap = movies.map(t => t.title);
console.log(titlesMap);

const interInTitle = movies.find(inter => inter.title.startsWith('Inter'));
console.log(interInTitle);

const red = movies.reduce()