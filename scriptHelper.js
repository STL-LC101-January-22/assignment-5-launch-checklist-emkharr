// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    let converted = Number(testInput)
    if (!isNaN(converted)) {
        return "Is a Number";
    } else if (isNaN(converted)) {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {


    
    if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoLevelInput.value === "") {
        window.alert("All fields are required");

    }

    let pilotTest = validateInput(pilotName)
    if (pilotTest === "Is a Number") {
        alert("Please enter characters A-Z");
    }

    let copilotNameTest = validateInput(copilotName);
    if (copilotName === "Empty") {
        alert("Please fill out");
    } else if (copilotNameTest === "Is a Number") {
        alert("please enter characters A-Z");
    }


    if (fuelLevel === "Empty") {
        alert("Please fill out");
    } else if (fuelLevel === "Not a Number") {
        alert("please enter a number");
    }


    if (cargoLevel === "Empty") {
        alert("Please fill out");
    } else if (cargoLevel === "Not a Number") {
        alert("please enter a number");
    }

    return;

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
