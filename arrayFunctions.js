/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */
function getOdds(numbers) {
  // Your code here
  
  numbers = numbers.filter(num =>{
    if (num % 2 !==0) return num });
  return numbers
  }


getOdds([1,2,3,4,5]);

  console.log( getOdds([1,2,3,4,5]));


/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */
 function getEvens(numbers) {
  // Your code here
  
 
  numbers = numbers.filter(num =>{
    if (num % 2 ===0) return num });
  return numbers
  }

getEvens([1,2,3,4,5,6]);
console.log(getEvens([1,2,3,4,5,6]));

  // Your code here



/**
 * countOccurences(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * countOccurences(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * countOccurences(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function countOccurences(x, numbers) {
  let i =0;
  numbers.forEach(num => {if (num ===  x) i++;});
  return i;
}
  
  

/**
 * makeThemDoctors(students):
 * - receives array `students`
 * - returns an array with the same elements of students with prefix `Dr. `
 *
 * e.g.
 * makeThemDoctors(["Ali", "Aseel", "Richard"]) -> ["Dr. Ali", "Dr. Aseel", "Dr. Richard"]
 */

function makeThemDoctors(students) {
  // Your code here

  students = students.map(student => {return "Dr. "+student;
  });
  return students
}

module.exports = { getOdds, getEvens, countOccurences, makeThemDoctors };
