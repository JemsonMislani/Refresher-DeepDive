/*
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


const movieTit = movies.filter(m => m.title);
console.log(movieTit);

const titlesMap = movies.map(t => t.title);
console.log(titlesMap);

const interInTitle = movies.find(inter => inter.title.startsWith('Inter'));
console.log(interInTitle);



// REFRESHER - CREATE SMALL PROJECT, USING .MAP, .FILTER, .FIND, .REDUCE // 

const mvs = [
  { id: 1, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { id: 2, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { id: 4, title: "Tenet", year: 2020, rating: 7.5, genre: "Sci-Fi" },
  { id: 5, title: "Joker", year: 2019, rating: 8.5, genre: "Drama" },
  { id: 6, title: "Avengers: Endgame", year: 2019, rating: 8.4, genre: "Action" },
];


    

    const lists = document.querySelector('.movieList');
        mvs.forEach((movie) => {
        const liElem = document.createElement('div');
        liElem.className = 'hmm'
        liElem.innerHTML = 
        `
        <p>Movie title: '${movie.title}'</p>
        <p>Rate: ${movie.rating}</p>
        <button class="add" onclick="faveMov('${movie.title}')">Add to favorite</button>
        `;
        lists.appendChild(liElem);

        const recommended = mvs.filter(rec => rec.genre === 'Sci-Fi');
        console.log(recommended);

        const filtered = recommended.map(fil => fil.title);
        console.log(filtered);

        document.querySelector('.sciFi').innerHTML = filtered;
    })

    function faveMov(title){
        const faveMovie = mvs.find(f => f.title === title);

        const faveElem = document.querySelector('.fave');
        
        const elem = document.createElement('li');
        elem.innerHTML = '';

        if(faveMovie){
        elem.innerHTML = `
        ${faveMovie.title} ${faveMovie.rating}
        <button onclick="removeMovies(${faveMovie.id})">Remove</button>`
        };
        faveElem.appendChild(elem);
    }

*/

// REFRESHER, EXPENSE TRACKER // 
/*
let expenses = [];


function renderExp(){
const expList = document.querySelector('.expenseList')
expList.innerHTML = '';

expenses.forEach((exp) => {
    const expense = document.createElement('div');
    expense.className = 'expName'
    expense.innerHTML = 
    `
    <p>${exp.name}</p>
    <p>${exp.amount}</p>
    <p>${exp.category}</p>
    <button onclick="rem(${exp.id})">Remove</button>
    `;
    expList.appendChild(expense);
})
}

function updateSum(){
    const tot = expenses.reduce((cat, amt) => cat + amt.amount, 0);
    document.querySelector('.total').innerHTML = `Total: ${tot}`

    const hghstExp = expenses.reduce((h, amt) => {
        return h > amt ? h : amt;
    }, 0)
    
    document.querySelector('.highest').innerHTML = `Highest expense: ${hghstExp.amount}`;

    const length = expenses.reduce((l, len) => l + len.amount / expenses.length, 0)

    let total = length;

    document.querySelector('.average').innerHTML = `Average: ${total}`;
}

function add(){
    const inputName = document.querySelector('.expenseName').value;
    const inputAmount = document.querySelector('.expenseAmount').value;

    const cate = document.querySelector('.cate').value;

    if(inputName === '' || inputAmount <= 0 || !cate){
        return;
    }

    const newExp = {
        id: Date.now(),
        name: inputName,
        amount: Number(inputAmount),
        category: cate
    };

    expenses.push(newExp);

    renderExp();
    updateSum();
}

function rem(id){
    expenses = expenses.filter(r => r.id !== id);
    renderExp();
    updateSum();
}

// 
*/
// REFRESH FUNCTION, LOOPS, .FIND, ,.FILTER, DOM , TEMPLATE STRING, 
/*
let todos = [];

function addTask(){
   const todoElem = document.querySelector('.whatToDo');

    const whatTask = todoElem.value;
    if(whatTask === ''){
        alert('Please input todo!')
        return;
    }

    const newTask = {
        id: Date.now(),
        todo: whatTask,
        completed: false,
    }

    todos.push(newTask);
    todoElem.value = '';
    renderTask();
}

function renderTask(){
    const lists = document.querySelector('.listHere');
    lists.innerHTML = '';

    todos.forEach((td) => {
    const inpDiv = document.createElement('div');
    inpDiv.innerHTML = 
    `
    <div class="para">
        <div class="par ${td.completed ? 'completed' : ''}">${td.todo}</div>
        <button class="" onclick="toggleCom(${td.id})">${td.completed ? 'Undo' : 'Completed'}</button>
        <button onclick="deleteTask(${td.id})">Remove</button>
    </div>
    `;
    lists.appendChild(inpDiv);
    });
}

function deleteTask(id){
    todos = todos.filter(d => d.id !== id);
    renderTask();
}

function toggleCom(id){
    const tog = todos.find(t => t.id === id);
    if(tog){
        tog.completed = !tog.completed;
        renderTask();
    }
}
*/
// REFRESHER FOR LOGIN FORM. 
/*
let cred = JSON.parse(localStorage.getItem('acc')) || [];

function logIn(){
    const inpName = document.querySelector('.name');
    const inpPass = document.querySelector('.pass');

    const userElem = inpName.value;
    const userPass = inpPass.value;

    if(userElem === '' || userPass === ''){
        alert('Please enter name and password.')
        return;
    }

    const existAcc = cred.find(e => e.userName === userElem && e.pass === userPass);

    if(!existAcc){
        alert('User not found')
    } else {
        alert('Succesfully log in')
    }
}

function addAcc(){

    const createAcc = document.querySelector('.newAccName');
    const createPass = document.querySelector('.newAccPass');

    const whatName = createAcc.value;
    const whatPass = createPass.value;

    cred.push({
        userName: whatName,
        pass: whatPass
    });
    localStorage.setItem('acc', JSON.stringify(cred));
}
*/