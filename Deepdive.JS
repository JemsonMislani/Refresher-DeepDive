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
*/
/*
function addAcc(){

    const createAcc = document.querySelector('.newAccName');
    const createPass = document.querySelector('.newAccPass');

    const whatName = createAcc.value;
    const whatPass = createPass.value;

    const existCre = cred.find(e => e.userName === whatName);
    if(existCre){
        alert('Username already exist')
    } else {
        cred.push({
            userName: whatName,
            pass: whatPass
        });
        localStorage.setItem('acc', JSON.stringify(cred));
        createAcc.value = '';
        createPass.value = '';
    }
}


// ASYNC AND AWAIT FEATURES // 

let cred = JSON.parse(localStorage.getItem('acc')) || [];

function fakeLogIn(userElem, userPass){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const credentials = JSON.parse(localStorage.getItem('acc')) || [];

            const user = credentials.find(u => u.userName === userElem.trim() && u.pass === userPass.trim());

            if(!user){
                reject('Invalid user!')
            } else {
                resolve({
                    message: 'Successfully logged in',
                    token: 'fake-jwt-token-123'
                });
            }
        }, 2000);
    });
}

async function logIn() {

    const inpName = document.querySelector('.name');
    const inpPass = document.querySelector('.pass');

    const userElem = inpName.value.trim();
    const userPass = inpPass.value.trim();

    if(!userElem || !userPass){
        alert('Please enter name and password')
        return;
    }

    const loadingElem = document.querySelector('.loading');
    loadingElem.style.display = 'block';

    try {
        console.log('Logging in...');
        const res = await fakeLogIn(userElem, userPass);
        localStorage.setItem('token', res.token);
        alert(res.message)
    } catch (error){
        console.log(error);
        alert(error);
    } finally {
        console.log('Log in request finished!');
        loadingElem.style.display = 'none'
    }
};

// APPLY ASYNC AND AWAIT IN MY ADDING ACC LOGIN FORM CODE.// 

function newRegister(whatName, whatPass){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cred = JSON.parse(localStorage.getItem('acc')) || [];

            const newUser = cred.find(n => n.userName === whatName);

            if(newUser){
                reject('Username already exist')
                const createHere = document.querySelector('.create');
                createHere.innerHTML = '';
            } else {
                cred.push({
                    userName: whatName,
                    pass: whatPass
                });
                localStorage.setItem('acc', JSON.stringify(cred));
                resolve('Account created successfully.')
                const createHere = document.querySelector('.create');
                createHere.innerHTML = '';
            }
        }, 3000);
    });
}

async function addAcc() {
    const inpName = document.querySelector('.newAccName');
    const inpPass = document.querySelector('.newAccPass');
    
    const whatName = inpName.value.trim();
    const whatPass = inpPass.value.trim();

    if(!whatName || !whatPass){
        alert('Please enter username and password');
        return;
    }

    try {
        const create = document.querySelector('.create');
        create.innerHTML = `Creating an account...`
        const res = await newRegister(whatName, whatPass);
        alert(res);
    } catch (error) {
        alert(error);
    }
}



// FETCH METHOD DEEP DIVE, POST REQUEST// 

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Jemson Mislani',
        body: 'My first fetch code',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})


async function addPost(){
    try {
        const tryAsync = await fetch('https://jsonplaceholder.typicode.com/posts', { 
            method: 'POST', // Magsesend ng POST request sa fake API. 
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ // Ipapasa ang JSON object 
                title: 'Try async function',
                body: 'My first async function',
                userId: 1
            })
        });
        const data = await tryAsync.json(); // Babalik ang API ng tryAsync JSON na may id na automatically (id: 101).
        console.log('Server Response:', data); // Lalabas sa console.log.
    } catch (error){
        console.error('Error:', error); // Lalabas ang error kung meron man. 
    }
}
addPost();

// MANIPULATE IMG // 
fetch('https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?cs=srgb&dl=pexels-steve-1070534.jpg&fm=jpg')
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    const img = document.querySelector('.exImg');
    img.src = URL.createObjectURL(blob);
    img.style.height = '400px';
    img.style.width = 'auto';
});
*/

// FAKE ACC REGISTER USING FETCH // 
/*
async function fakeRegister() {
    const inpName = document.querySelector('.username');
    const inpPass = document.querySelector('.password');

    const user = inpName.value.trim();
    const pass = inpPass.value.trim();

    if(!user || !pass){
        alert('Enter username and password')
        return;
    }

    try {
        const output = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                user,
                pass,
            })
        })
        const data = await output.json();
        console.log('Server response:', data)
        document.querySelector('.result').innerHTML = 
        `Successfully created: User ${user} your ID#: ${data.id}`;
        inpName.value = '';
        inpPass.value = '';
    } catch (error){
        console.error(error);
    }
}
*/
// REFRESH FAKE LOGIN USING FETCH //

let accounts = [{
    userName: 'Jemson',
    userPass: '123'
},{
    userName: 'Ivy',
    userPass: '321'
}]

function logInCredentials(user, pass){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const acc = accounts.find(a => a.userName === user && a.userPass === pass)

            if(acc){
                resolve({
                    message: 'Successfully login',
                    token: 'fake-token-111'
                })
            } else {
                reject('Invalid account')
            }
        }, 2000)
    })
}

async function logInButton() {
    const userEl = document.querySelector('.user');
    const userPassEl = document.querySelector('.pass');

    const inpUser = userEl.value.trim();
    const inpPass = userPassEl.value.trim();

    if(!inpUser || !inpPass){
        alert('Enter credentials.')
        return;
    }
    
    const butt = document.querySelector('.logIn');
    butt.disabled = true;
    butt.innerHTML = 'Logging...'

    loadingElem();

    try{
        const output = await logInCredentials(inpUser, inpPass);
        alert(output.message);
        userEl.value = '';
        userPassEl.value = '';
        localStorage.setItem('token', output.token);
    } catch (error){
        alert(error);
    } finally {
        butt.disabled = false;
        butt.innerHTML = 'Login'
        userEl.value = '';
        userPassEl.value = '';
    }
}
// LOADING SPINNER FAETURE // 

    const load = document.querySelector('.spinner');
    function showLoad(){
        load.classList.remove('hidden')
    }
    
    function hideLoad(){
        load.classList.add('hidden')
    }

    async function loadingElem(){
        showLoad();
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1900)
        })
            hideLoad();
    }
    loadingElem();
    