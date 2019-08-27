const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {};

class Food {};

let myDog = new Dog();

myDog.on('chew', (item) => {
  if (item instanceof Food) {
    console.log('Good dog');
  } else {
    console.log(`Time to buy another ${item}`);
  }
});


myDog.emit('chew', 't-shirt');
const bacon = new Food();
myDog.emit('chew', bacon); // Will result in console.log('Good dog')