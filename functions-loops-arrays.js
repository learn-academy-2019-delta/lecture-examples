// PUTTING IT ALL TOGETHER LECTURE 7/31/19

// Create a function that takes in a traffic light color and logs an appropriate reaction

// function take in one argument
// to determine if the argument is red/yellow/green
// log response to each
// catch all response if none of the above

function lightStatus(lightColor){
  if(lightColor === "red"){
    return "STOOOOOOP!"
  } else if(lightColor === "yellow"){
    return "Step on it!"
  } else if(lightColor === "green"){
    return "GOOOOOO dog go!"
  } else {
    return "Something went wrong."
  }
}
console.log(lightStatus("red"))
console.log(lightStatus("yellow"))
console.log(lightStatus("green"))
console.log(lightStatus(5))


// Create a function that takes in an array of numbers and returns a new array with all the numbers multiplied by 3

var testmultiply1 = [1, 2, 3, 4, 5, 6]
var testmultiply2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var testmultiply3 = [11, 12, 13, 14, 15, 16]

// function that takes one argument of an array
// create a loop
// multiply each number by 3
// outcome new array

function mult3(array){
  var newArr = []
  for(let i=0; i<array.length; i++){
    newArr.push(array[i]*3)
  }
  return newArr
}

console.log(mult3(testmultiply1))
console.log(mult3(testmultiply2))
console.log(mult3(testmultiply3))


// Create a function that takes in an array and returns an array with only the odd numbers

var testOdds1 = [-2, -1, 0, 1, 2, 3, 4, 5, 6]
var testOdds2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var testOdds3 = [10, 11, 12, 13, 14, 15, 16]

// function that takes one argument of an array
// create an empty array
// loop through the array
// if the value is odd, push it to the empty array
// return the new array

function onlyOdds(array){
  var oddsArray = []
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 !== 0){
      oddsArray.push(array[i])
    }
  }
  return oddsArray
}
console.log(onlyOdds(testOdds1))
console.log(onlyOdds(testOdds2))
console.log(onlyOdds(testOdds3))


// Create a function that takes in an array and returns an array with only the indexes of the odd numbers

// function that takes one argument of an array
// create an empty array
// loop through the array
// if the index is odd, push the value to the empty array
// return the new array

function onlyOddIndex(array){
  var oddIndex = []
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 !== 0){
      oddIndex.push(i)
    }
  }
  return oddIndex
}
console.log(onlyOddIndex(testOdds1))
console.log(onlyOddIndex(testOdds2))
console.log(onlyOddIndex(testOdds3))
