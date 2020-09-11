// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
for (i = 1; i < 21; i++) console.log(i);

// Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
for (i = 0; i < 201; i+=2) console.log(i);

// Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
const catSays = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
for (i = 1; i < 21; i++) {
    if (i % 2 === 0) console.log(catSays[getRandomInt(3)]);
    else console.log('Love me, pet me! HSSSSSS!');
}

// Fizz Buzz
// Write a javascript application that logs all numbers from 1 - 100 AND:
// 1. If a number is divisible by 3 log "Fizz" instead of the number.
// 2. If a number is divisible by 5 log "Buzz" instead of the number.
// 3. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)  console.log('FizzBuzz'); 
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// Getting to Know You
// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny.splice(0, 1, "Gameboy")
jimClark.splice(1, 1, jimClark[1] + 1)
ryan.splice(2, 1, "Gotham City")
reuben.splice(2, 1)
reuben.push("Chicago")
jimHaff.splice(2, 1, "Seoul", "Long Beach", "Florence")
jimHaff.splice(2, 1)

console.log(kenny, 
    jimHaff, 
    reuben,
    jimClark, 
    ryan)

// Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// 2. Use a for loop to call .toUpperCase() on each of them and print out the result.
// 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (i = 0; i < ninjaTurtles.length; i++) {
    let name = ninjaTurtles[i];
    let splitName = name.split('')
    for (j = 0; j < splitName.length; j++) {
        let letter = splitName[j].toString();
        console.log(letter)
        if (j % 2 === 0) {
            splitName.splice(j, 1, letter.toUpperCase());
        } else {
            splitName.splice(j, 1, letter.toLowerCase())
        }
    }
    let finalName = splitName.join('')
    ninjaTurtles[i] = finalName;
    }
console.log(ninjaTurtles)

