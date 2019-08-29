/**
 * try-catch is used to catch the exceptions thrown from the synchronous code execution. If the caller (or the caller's caller, ...) use
 */

// ** Example - 1 **
function doSomeSynchronousOperation(req, res) {
  if (req.body.username === '') {
    throw new Error('User Name cannot be empty');
  }
  return true;
}
// calling the method above
try {
  // synchronous code
  doSomeSynchronousOperation(req, res)
} catch (e) {
  // exception handled here
  console.log(e.message);
}
// ** Example - 2 **
function doSomeAsynchronousOperation(req, res, cb) {
  // imitating async operation
  return setTimeout(function () {
    cb(null, []);
  }, 1000);
}
try {
  // asynchronous code
  doSomeAsynchronousOperation(req, res, function (err, rs) {
    throw new Error("async operation exception");
  })
} catch (e) {
  // Exception will not get handled here
  console.log(e.message);
}
// The exception is unhandled and hence will cause application to break


function doSomeAsynchronousOperation(req, res, callback) {
  setTimeout(function () {
    return callback(new Error('User Name cannot be empty'));
  }, 1000);
  return true;
}
doSomeAsynchronousOperation(req, res, function (err, result) {
  if (err) {
    //exception handled here
    console.log(err.message);
  }

  //do some stuff with valid data
});

/**
 * callbacks are mostly used in Node.js as callback delivers an event asynchronously. The user passes you a function
(the callback), and you invoke it sometime later when the asynchronous operation completes.
The usual pattern is that the callback is invoked as a callback(err, result), where only one of err and result is non-null,
depending on whether the operation succeeded or failed.
 */