 // numbers that are 5 or greater
 let numbers = [2, 7, 4, 10, 3, 8];
 fn= numbers.filter((value) => value >= 5);
 console.log(fn);


// even numbers
 EvenNumbers = numbers.filter((value) => value % 2 === 0);
console.log(EvenNumbers);


//word that are 5 characters or fewer in length
  Words = ['yassine', 'chaabani', 'inform', 'apple', 'Hello'];
  ShortWords = Words.filter(valuee => valuee.length <= 5);
  console.log(ShortWords);


//people who belong to the club 
let people = [
    { name: 'Yassine', belongs: true , age:21 , voted: true},
    { name: 'Mohamed', belongs: false, age:20 ,voted: true },
    { name: 'Ali', belongs: true, age:18 ,voted: false },
    { name: 'Rami', belongs: true, age:16 ,voted: true },
    { name: 'Alii', belongs: true, age:30 ,voted: false },
    { name: 'Ramii', belongs: true , age:28 ,voted: true },
    { name: 'Aliii', belongs: false , age:10 ,voted: true},
    { name: 'Ramiii', belongs: false , age:17 ,voted: false }
    
  ];
   MembersOfClub = people.filter(peop => peop.belongs);
   console.log(MembersOfClub);

  
//older than 18
  OlderThan18 = people.filter(peop => peop.age > 18);
  console.log(OlderThan18);
  
  /*___________________________________________________________________________________________________*/

//Total of numbers 
let numberss = [5, 25, 1, 10, 7, 15, 18, 20];
total = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log(total);


//Count of Voters 
let voter;
const countVoters = people.reduce((count, vot) => count + 
( if(vot.voted){voter=1;}else{voter=0;} ), 0);
console.log(countVoters);


//Total cost of whishlist items 
let whishlistItems=[
    {name:'iphone X', price:1000},
    {name:'computer', price:1500},
    {name:'macbook pro',price:2000},
    {name:'watch', price:500},
    {name:'tv', price:1200},
]
Cost_Total = whishlistItems.reduce((total, name) => total + name.price, 0);
console.log(Cost_Total);