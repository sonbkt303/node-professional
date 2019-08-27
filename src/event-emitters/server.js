const EventEmitter = require('events')
const serverEvents = new EventEmitter()
// Set up an HTTP server
const http = require('http')
const httpServer = http.createServer((request, response) => {
  // Handler the request...
  // Then emit an event about what happened
  serverEvents.emit('request', request.method, request.url)
});

httpServer.listen(3001, () => {
  console.log('asdasd')
})
// Expose the event emitter
module.exports = serverEvents;
