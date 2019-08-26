const fs = require('fs');
const path = require('path');
const readline = require('readline');
// fs with encoding

fs.readFile('hello.txt', {
  encoding: 'utf8'
}, (err, content) => {
  if (err) return console.log(err);

});

// without encoding
fs.readFile('hello.txt', (err, binaryContent) => {
  // If an error occurred, output it and return
  if (err) return console.error(err);

  // No error occurred, content is a Buffer, output it in
  // hexadecimal representation.
  // console.log(binaryContent.toString('hex'));
});

//  Relative paths
fs.readFile(path.resolve(__dirname, 'someFile'), (err, binaryContent) => {
  //Rest of Function
})

// Listing Directory Contents with readdir or readdirSync

fs.readdir('/usr/local/bin', (err, files) => {

  if (err) return console.error(err);
  // files is an array containing the names of all entries
  // in the directory, excluding '.' (the directory itself)
  // and '..' (the parent directory).
  // Display directory entries
  // console.log(files.join());
});

// read file Synchronously

let files;
try {
  files = fs.readdirSync('/var/tmp');

  //  console.log(files);
} catch (err) {
  // An error occurred
  console.error(err);
}


// Section 4.4: Reading from a file synchronously

let content;
try {
  content = fs.readFileSync('hello.txt', {
    encoding: 'utf8'
  });

} catch (err) {
  // An error occurred
  console.error(err);
}


// Section 4.6: Checking if a file or a directory exists

// Asynchronously

fs.stat('path/to/file', function (err) {
  if (!err) {
    console.log('file or directory exists');
  } else if (err.code === 'ENOENT') {
    // console.log('file or directory does not exist');
  }
});

// Synchronously

try {
  fs.statSync('path/to/file');
  console.log('file or directory exists');
} catch (err) {
  if (err.code === 'ENOENT') {
    // console.log('file or directory does not exist');
  }
}


// Section 4.7: Determining the line count of a text file
const file = './hello.txt';
let linesCount = 0;
const rl = readline.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false
});
rl.on('line', function (line) {
  linesCount++; // on each linebreak, add +1 to 'linesCount'
});
rl.on('close', function () {
  // console.log(linesCount); // print the result when the 'close' event is called
});




let fileLine = './hello.txt';
let rline = readline.createInterface({
  input: fs.createReadStream(fileLine),
  output: process.stdout,
  terminal: false
});
rline.on('line', function (line) {
  //  console.log(fileLine) // print the content of the line on each linebreak
});


// Section 4.9: Avoiding race conditions when creating or using an existing directory

// Asynchronous version with fs.mkdir()

function mkdir(dirPath, callback) {
  fs.mkdir(dirPath, (err) => {
    callback(err && err.code !== 'EEXIST' ? err : null);
  });
}

mkdir('./existingDir', (err) => {
  if (err)
    return console.error(err.code);
  // Do something with `./existingDir` here
});

// Synchronous version with fs.mkdirSync()

function mkdirSync(dirPath) {
  try {
    fs.mkdirSync(dirPath);
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}
mkdirSync('./existing-dir');


//  Section 4.10: Cloning a file using streams

var readable = fs.createReadStream(__dirname + '/hello.txt', {
  encoding: 'utf8',
  highWaterMark: 16 *
    1024
});
// create writable stream
var writable = fs.createWriteStream(__dirname + '/nodeCopy.txt');
// Write each chunk of data to the writable stream
readable.on('data', function (chunk) {
  writable.write(chunk);
});


/**
 * Section 4.11: Writing to a file using writeFile or writeFileSync
 */

// Save the string "Hello world!" in a file called "hello.txt" in
// the directory "/tmp" using the default encoding (utf8).
// This operation will be completed in background and the callback
// will be called when it is either done or failed.
fs.writeFile('/tmp/hello.txt', 'Hello world!', function (err) {
  // If an error occurred, show it and return
  if (err) return console.error(err);
  // Successfully wrote to the file!
});
// Save binary data to a file called "binary.txt" in the current
// directory. Again, the operation will be completed in background.
let buffer = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
fs.writeFile('binary.txt', buffer, function (err) {
  // If an error occurred, show it and return
  if (err) return console.error(err);
  // Successfully wrote binary contents to the file!
});


/**
 * Section 4.12: Changing contents of a text file
 */

fs.readFile('hello.txt', 'utf-8', function (err, data) {
  if (err) throw err;
  var newValue = data.replace(/email/gim, 'name');
  // fs.writeFile('hello.txt', newValue, 'utf-8', function (err, data) {
  // if (err) throw err;
  // console.log('Done!');
  // })
})


/**
 * Section 4.13: Deleting a file using unlink or unlinkSync
 */

// Delete a file asynchronously:

// fs.unlink('./hello.txt', function (err) {
// if (err) throw err;
// console.log('file deleted');
// });

// Delete it synchronously

// fs.unlinkSync('./hello.txt');