/* 
README:
I created a personal budget tracker because it is a useful real-world application.
Users can add expenses, track totals, and interact with the page dynamically.
*/

// VARIABLES
let total = 0;
let expenses = [];

// DOM ELEMENTS
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const list = document.getElementById("list");
const totalText = document.getElementById("total");
const dateText = document.getElementById("date");

// BUILT-IN OBJECT (Date)
const today = new Date();
dateText.textContent = "Today: " + today.toDateString();

// CUSTOM FUNCTION
function addExpense() {
    let description = descInput.value;
    let amount = parseFloat(amountInput.value); // built-in function

    // CONDITIONAL + LOGICAL OPERATORS
    if (description === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid data");
        return;
    }

    // ARRAY STORAGE
    expenses.push({ description, amount });

    // ARITHMETIC OPERATOR
    total = total + amount;

    // CREATE NEW ELEMENT
    let li = document.createElement("li");

    // COMPARISON OPERATOR
    if (amount > 100) {
        li.style.color = "red"; // DOM manipulation
    }

    li.textContent = description + ": $" + amount.toFixed(2);

    // ADD TO PAGE (DOM manipulation)
    list.appendChild(li);

    // UPDATE TOTAL
    totalText.textContent = "Total: $" + total.toFixed(2);

    // CLEAR INPUTS
    descInput.value = "";
    amountInput.value = "";
}

// SECOND FUNCTION 
function clearExpenses() {
    expenses = [];
    total = 0;
    list.innerHTML = "";
    totalText.textContent = "Total: $0.00";
}

// EVENT LISTENER 1 
document.getElementById("addBtn").addEventListener("click", addExpense);

// EVENT LISTENER 2 
amountInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addExpense();
    }
});
 
// EVENT LISTENER 3 
document.getElementById("clearBtn").addEventListener("click", clearExpenses);