/*
Name: Jayson Lucas
Date: April 3, 2026
*/

"use strict";

// Counters for summary
let fragileCount = 0;
let loadCount = 0;
let inspectCount = 0;

// Loop through crates 1–20
for (let crate = 1; crate <= 20; crate++) {

    if (crate % 5 === 0) {
        console.log("Crate " + crate + ": Handle with care");
        fragileCount++;

    } else if (crate % 2 === 0) {
        console.log("Crate " + crate + ": Load crate");
        loadCount++;

    } else {
        console.log("Crate " + crate + ": Inspect crate");
        inspectCount++;
    }
}

// Final summary
console.log("Total crates scanned: 20");
console.log("Number of fragile crates: " + fragileCount);
console.log("Number of loaded crates: " + loadCount);
console.log("Number of inspected crates: " + inspectCount);