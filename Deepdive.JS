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

