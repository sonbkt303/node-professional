const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
var emitter = new MyEmitter();
emitter
  .on("message", function () { //listen for message event
    console.log("a message was emitted!");
  })
  .on("message", function () { //listen for message event
    console.log("this is not the right message");
  })
  .on("data", function () { //listen for data event
    console.log("a data just occurred!!");
  });

emitter.emit('message')
console.log(emitter.eventNames()); //=> ["message","data"]
emitter.removeAllListeners("data", "message"); //=> removeAllListeners to data event
console.log(emitter.eventNames()); //=> ["message"]