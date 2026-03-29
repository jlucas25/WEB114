// Name: Jayson Lucas, Date: March 26, 2026

"use strict";

// Prompt user for favorite month
let favMonth = prompt("Enter your favorite month:");

// Convert input to lowercase
favMonth = favMonth.toLowerCase();

// Switch statement for months
switch (favMonth) {

    // Spring
    case "march":
    case "april":
    case "may":
        console.log("Spring is nice with everything blooming.");
        break;

    // Summer
    case "june":
    case "july":
    case "august":
        console.log("You enjoy the summer months!");
        break;

    // Fall
    case "september":
    case "october":
    case "november":
        console.log("Fall is fun with all of the pretty colors.");
        break;

    // Winter
    case "december":
    case "january":
    case "february":
        console.log("You love the winter months!");
        break;

    // Default
    default:
        console.log("Other months are interesting too!");
}