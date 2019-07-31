// FUNCTIONS LECTURE 7/31/19

// Indentation!!

// Basic function, no argument

function myGreeting(){
  return "Hello!"
}
myGreeting()

// Basic function, with argument
function greetMe(name){
  return "Hello " + name
}
console.log(greetMe("Sarah"))
console.log(greetMe("Dante"))
console.log(greetMe("Jez"))
console.log(greetMe("Matt"))

// Create a function that takes in a traffic light color and logs an appropriate reaction
function trafficLight(lightStatus){
  if(lightStatus === "red"){
    console.log("Whoa, buddy.")
  } else if(lightStatus === "yellow"){
    console.log("Floor it!")
  } else if(lightStatus === "green"){
    console.log("GOOOOOO!!")
  } else {
    console.log("You did something wrong.")
  }
}
trafficLight("red")
trafficLight("yellow")
trafficLight("green")
trafficLight(6)

// var testArray1 = [1, 2, 3, 4, 5, 6]
// var testArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var testArray3 = [11, 12, 13, 14, 15, 16]

function mult3(array){
  var newArray = []
  for(let i=0; i<array.length; i++){
    newArray.push(array[i]*3)
  }
  return newArray
}
// console.log(mult3(testArray1))
// console.log(mult3(testArray2))
// console.log(mult3(testArray3))



// Create a function that takes in an array and returns an array with only the odd numbers

var testArray1 = [-2, -1, 0, 1, 2, 3, 4, 5, 6]
var testArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var testArray3 = [10, 11, 12, 13, 14, 15, 16]

function onlyOdds(array){
  var oddsArray = []
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 !== 0){
      oddsArray.push(array[i])
    }
  }
  return oddsArray
}
// console.log(onlyOdds(testArray1))
// console.log(onlyOdds(testArray2))
// console.log(onlyOdds(testArray3))

// Create a function that takes in an array and returns an array with only the indexes of the odd numbers

function onlyOddIndex(array){
  var oddIndex = []
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 !== 0){
      oddIndex.push(i)
    }
  }
  return oddIndex
}
console.log(onlyOddIndex(testArray1))
console.log(onlyOddIndex(testArray2))
console.log(onlyOddIndex(testArray3))

// Hi/Low Game - Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the user's guess is too high or too low, the computer notifies them of that, otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.

function hiLow(){
  var userGuess = prompt("Please select a number.")
  var randomNum = Math.random(Math.celing()*100)
  if(userGuess === randomNum){
    console.log()
  }
}


var testArr2 = [1, 2, 7, 4, 10, 8, 9]

function onlyEven(array){
  let newArr = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      newArr.push(array[i])
    }
  }
  return newArr
}
console.log(onlyEven(testArr2))
