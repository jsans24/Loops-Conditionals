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

// Return of the Closets
// Alien Attire
//     1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// Dress 'em Up
//     1. Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
let kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0, 1);
thomsCloset[2].push(kristynsShoe);
const kristynsAccessories = [kristynsCloset[0], kristynsCloset[1], kristynsCloset[4], ];
console.log("Kristyn is wearing a " + kristynsCloset[2] + ' and ' + kristynsCloset[3] + ' and a ' + kristynsAccessories[getRandomInt(3)])
console.log('Thom is wearing a ' + thomsCloset[0][getRandomInt(4)] + ' and ' + thomsCloset[1][getRandomInt(3)] + ' and a ' + thomsCloset[2][getRandomInt(4)])

// Dirty Laundry
// Continue looking at the closet arrays:
//     1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// Inventory
//     1. Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
for (i = 0; i < kristynsCloset.length - 1; i++) console.log("WHIRR: Now washing " + kristynsCloset[i]) // You should not put marshmallow peeps in the wash.
console.log('Thoms closet contains ' + thomsCloset[0] + ', ' + thomsCloset[1] + ', and ' + thomsCloset[2])

// Multiples of 3 and 5
// Yes, you might have tackled this earlier, but try it again (don't look back at your other code 👀)
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// 👏 You just solved Project Euler problem 1! 👏
const sum = []
for (i = 0; i < 1000; i++){
    if (i % 3 === 0 || i % 5 === 0) sum.push(i)
}
total = sum.reduce((a, b) => {
    return a + b;
  });
console.log(total)

// Triangles
// 0. declare a variable argument and set it equal to 7.
// 1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of argument.
// 2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of argument. This is deceptively tricky.
// 3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.
// 4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument. This is also tricky.
// 5. Change the value of argument and reload your code and marvel at how you just solved a challenging problem and feel proud of yourself.
const argument = 10
let triangle = ''
let hash = '#'
let blank = ' '
for (i = 0; i <= argument; i++) {
  triangle += hash.repeat(i) + '\n'
}
for (i = argument - 1; i > 0; i--) {
  triangle += blank.repeat(i) + hash.repeat(argument - i) + '\n'
}
for (i = argument; i > 0; i--) {
  triangle += hash.repeat(i) + blank.repeat(argument - i) + '\n'
}
for (i = argument; i > 0; i--) {
  triangle += blank.repeat(argument - i) + hash.repeat(i) + '\n'
}
console.log(triangle)

// Find the Median
//   Find the median number in the following nums array, then console.log that number.
//   hint this will likely involve breaking down the problem into a few steps
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
// Expected output:
// => 15
nums.sort(function(a, b){return a-b})
let median = 0
for (i = 1; i <= Math.floor(nums.length/2); i++) {
  nums.splice(i - 1, 1, ' ')
  nums.splice(nums.length - i, 1, ' ')
  if (nums[i] !== isNaN) {
    median = nums[i]
  }
}
console.log(median)