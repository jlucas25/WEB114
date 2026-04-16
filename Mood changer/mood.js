// Name: Jayson Lucas
// Date: 04/16/2026

"use strict";

// STEP 1: SELECT ELEMENTS

const moodTitle = document.querySelector("#moodTitle");
const message = document.querySelector("#message");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const excitedBtn = document.querySelector("#excitedBtn");
const chillBtn = document.querySelector("#chillBtn");
const mysteriousBtn = document.querySelector("#mysteriousBtn");

// STEP 2: DATA OBJECT

const moods = {

    happy: {
        name: "Happy",
        bg: "#FFD700",
        text: "#bd26b0",
        message: "Warm smiles and the sun’s kisses!"
    },

    calm: {
        name: "Calm",
        bg: "#B0E0E6",
        text: "#2F4F4F",
        message: "Relax, breathe, and enjoy the quiet."
    },

    excited: {
        name: "Excited",
        bg: "#FF4500",
        text: "#ffffff",
        message: "Energy is high—let’s go!"
    },

    chill: {
        name: "Chill",
        bg: "#2E8B57",
        text: "#ffffff",
        message: "Kick back and take it easy."
    },

    mysterious: {
        name: "Mysterious",
        bg: "#2c003e",
        text: "#d3d3d3",
        message: "Something unknown is in the air..."
    }
};

// STEP 3: FUNCTION

function changeMood(moodName) {

    const mood = moods[moodName];

    // Change background color
    document.body.style.backgroundColor = mood.bg;

    // Change text color
    document.body.style.color = mood.text;

    // Update message
    message.textContent = mood.message;

    // Update title
    moodTitle.textContent = mood.name;

    // Debugging logs
    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}

// STEP 4: EVENT HANDLERS

function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleExcitedClick() {
    changeMood("excited");
}

function handleChillClick() {
    changeMood("chill");
}

function handleMysteriousClick() {
    changeMood("mysterious");
}

// STEP 5: EVENT LISTENERS

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
excitedBtn.addEventListener("click", handleExcitedClick);
chillBtn.addEventListener("click", handleChillClick);
mysteriousBtn.addEventListener("click", handleMysteriousClick);