"use strict";
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received after 3 seconds");
        }, 3000);
    });
};
fetchData().then((data) => {
    console.log(data);
});
