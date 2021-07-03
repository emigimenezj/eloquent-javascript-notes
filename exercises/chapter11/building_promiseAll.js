/*
Given an array of promises, Promise.all returns a promise that waits for all of the promises
in the array to finish. It then succeeds, yielding an array of result values.
If a promise in the array fails, the promise returned by all fails too, with the failure reason from the failing promise.

Implement something like this yourself as a regular function called Promise_all.

Remember that after a promise has succeeded or failed, it can’t succeed or fail again,
and further calls to the functions that resolve it are ignored.
This can simplify the way you handle failure of your promise.
*/

// --- THE SOLUTION --- //
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let pending = promises.length;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(result => {
        results[i] = result;
        pending--;    // This is necessary because you need to call 'resolve' in the 'then' of some promise before the loop ends.
                      // This variable allows you to know when you are working with the last promise of the promises array.
                      // You can't put the 'resolve' call outside of a promise scope because it means it'll be part of the script and runs before of promises.
        if (pending == 0) resolve(results);   // When you call all the promises, return the array with 'resolve'.
                                             // This means that the last promise to finish will call 'resolve' and at this point the array will already be completed.
      }).catch(reject);
    }
    if (promises.length == 0) resolve(results);   // This line runs before the promises call because it is a part of the script.
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
  console.log("We should not get here");
}).catch(error => {
  if (error != "X") {
    console.log("Unexpected failure:", error);
  }
});
