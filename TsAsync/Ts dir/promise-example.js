"use strict";
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data fetched successfully");
    }
    else {
        reject("Failed to fetch data");
    }
});
myPromise.then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
});
