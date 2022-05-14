// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));

// done - Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// done - Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// done - As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

//range function
function range(start, end){
  //our array
  let rangeOfNums = []

  //for loop to get values into array, from start to end
  //start at the start value, and push each value into our array, stop at the last value
  for(let i = start; i <= end; i++){
    rangeOfNums.push(i)
  }

  //return array
  return rangeOfNums
}

//sum function
function sum(arr){
  //take in an array, arr - then return the sum of all numbers in arr
  return arr.reduce((acc, c) => acc + c, 0)
}


//how do i increment by variable
//needs to work with positive and negative values, so 5, 3, 1
//RANGE FUNCTION WITH STEP
function range(start, end, step){
  //our array
  let rangeOfNums = []

  //if no step is given, run this
  if(step == ''){
    for(let i = start; i <= end; i++){
      rangeOfNums.push(i)
    }
    //if step is more than 0, run this
  } else if(step > 0){
    for(let i = start; i <= end; i+=step){
      rangeOfNums.push(i)
    }
    //if step is less than 0, run this, i += step so  10 += -4, so 10 -4, 6 - 4, etc
  } else if(step < 0){
      for(let i = start; i >= end; i+=step){
        rangeOfNums.push(i)
      }
    }
    //after if else statements are done, return our array
    return rangeOfNums
    
  }

  
  



// console.log(range(1, 10, 2));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(sum(range(1,10)))
console.log(range(10, 2, -4));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));