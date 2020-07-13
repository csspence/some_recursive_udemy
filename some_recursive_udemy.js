/*
JavaScript Algorithms and Data Structures Masterclass

someRecursive
Write a recursive function called someRecursive which accepts an array and a callback.  The function returns true if a single value in the array returns true when passed to the callback.  Otherwise it returns false.
*/

const someRecursive = (array, callback) => {
  if(callback(array[array.length - 1]) === true) {
    return true;
  }
  if(array.length > 1) {
    return someRecursive(array.slice(0, array.length - 1), callback);
  }
  if(array.length === 1) {
    return false;
  }
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false