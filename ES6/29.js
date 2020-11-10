/*
    FCC Version - 7.0
    Complete a Promise with resolve and reject
    Task - 29 / 31
*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
