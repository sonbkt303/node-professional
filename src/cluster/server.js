const http = require('http');
function startServer() {
 const server = http.createServer((req, res) => {
 res.writeHead(200);
 res.end('Hello Http');
 });
 server.listen(3000, () => {
  //  console.log('App listen at port: 3000')
 });
}
if(!module.parent) {
 // Start server if file is run directly
 
 startServer();
} else {
 // Export server, if file is referenced via cluster
 module.exports = startServer;
}