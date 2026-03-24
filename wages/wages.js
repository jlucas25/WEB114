"use strict";

// Get hourly wage
let hourlyWage = prompt("What is your hourly wage?");
hourlyWage = Number(hourlyWage);

// Confirm hourly wage
confirm("Your hourly wage is $" + hourlyWage);

// Get hours worked
let hoursWorked = prompt("How many hours did you work this week?");
hoursWorked = Number(hoursWorked.trim());

// Confirm hours worked
confirm("You worked " + hoursWorked + " hours this week");

// Validate input
if (isNaN(hourlyWage) || isNaN(hoursWorked)) {
    console.log("Invalid input. Please enter numbers only.");
} else {

    // Calculate gross pay
    let grossPay = hourlyWage * hoursWorked;

    // Calculate taxes (10%)
    let taxes = grossPay * 0.10;

    // Calculate net pay
    let netPay = grossPay - taxes;

    // Display net pay
    console.log("Your net pay for the week is: $" + netPay.toFixed(2));

    // Overtime check
    if (hoursWorked > 40) {
        console.log("You worked overtime this week!");
    } else if (hoursWorked === 40) {
        console.log("You worked exactly 40 hours.");
    } else {
        console.log("No overtime this week.");
    }

    // Paycheck evaluation
    if (netPay > 800) {
        console.log("Great paycheck this week!");
    } else {
        console.log("Keep working toward a bigger paycheck!");
    }
}