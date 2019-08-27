const server = require('./server.js')
// Since the server exported an event emitter, we can listen to it for changes:
server.on('request', (method, url) => {
 console.log(`Got a request: ${method} ${url}`)
})