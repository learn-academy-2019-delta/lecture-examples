// FUNCTIONS LECTURE 7/31/19 - Examples from the whiteboard

// Vocabulary terms:
// - Declaration
// - Argument
// - Call/Invocation

// Basic function, no argument

function basicGreeter(){
  return "Hello!"
}
console.log(basicGreeter())
  // output -->> "Hello!"


// Basic function, with argument

function greeterWithArgument1(name){
  return "Hello, " + name
}
console.log(greeterWithArgument1("Sarah"))
  // output -->> "Hello, Sarah"
console.log(greeterWithArgument1("Dante"))
  // output -->> "Hello, Dante"

var myName1 = "Sarah"
var myName2 = "Dante"
function greeterWithArgument2(name){
  return "Hello, " + name
}
console.log(greeterWithArgument2(myName1))
  // output -->> "Hello, Sarah"
console.log(greeterWithArgument2(myName2))
  // output -->> "Hello, Dante"
