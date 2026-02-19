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

