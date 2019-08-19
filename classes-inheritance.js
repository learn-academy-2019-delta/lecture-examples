// Class Review

// Classes are: Blueprints for objects

class Coffee {
  constructor(sugars=0, creams=0){
    this.sugars = sugars
    this.creams = creams
  }

  describe(){
    console.log(`This coffee has ${this.sugars} sugars and ${this.creams} creams`)
  }
}

// let coffee = new Coffee(2);
// console.log(coffee);
// coffee.describe()

// Basic inheritance: Sharing the blueprint

class Dog{
  constructor(){
    this.paws = 4
    this.ears = 'pointed'
  }

  bark(){
    console.log('BARK!')
  }
}

let pupper = new Dog();
console.log(pupper);
pupper.bark()

class Husky extends Dog {}

// let husky = new Husky();
// console.log(husky);
// husky.bark()

// Expressing variation through attributes (altering the constructor)

class Bloodhound extends Dog {
  constructor(){
    super() // run superclass' constructor
    this.ears = 'floppy'
    this.colors = "Brown and black"
  }
}

// let bloodhound = new Bloodhound();
// console.log(bloodhound);
// bloodhound.bark();

// Expressing variation through behavior

class Beagle extends Dog{
  constructor(){
    super()
    this.ears = 'floppy'
  }

  bark(){
    console.log('RO RO RO')
  }

  howl(){
    console.log("ROOOO!")
  }
}

let beagle = new Beagle();
console.log(beagle);
beagle.howl();
beagle.bark();

// pupper.howl();